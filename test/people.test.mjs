import test from 'node:test'
import assert from 'node:assert/strict'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { CalendarSettingsBackend, fetchVerdict } from '../lib/web.js'
import { loadPersonConnection, personFor } from '../lib/people.js'
import { apply } from '../lib/index.js'

function scratch(t) {
  const dir = mkdtempSync(join(tmpdir(), 'dsh-calendar-people-'))
  t.after(() => rmSync(dir, { recursive: true, force: true }))
  return dir
}

function writePerson(dir, person, value) {
  writeFileSync(join(dir, person + '.json'), JSON.stringify(value), { mode: 0o600 })
}

const post = (body, headers = {}) => new Request('https://dsh.example/api/dsh-calendar/settings', {
  method: 'POST', headers: { 'content-type': 'application/json', host: 'dsh.example', ...headers }, body: JSON.stringify(body),
})

test('a person file reads its password from a separate secret file', async (t) => {
  const dir = scratch(t)
  writeFileSync(join(dir, 'secret'), 'app-pass\n', { mode: 0o600 })
  writePerson(dir, 'ann', { provider: 'icloud', username: 'ann@icloud.com', passwordFile: join(dir, 'secret'), calendars: [{ name: 'Home', url: 'https://caldav.icloud.com/1/calendars/home/' }] })
  const connection = await loadPersonConnection(dir, 'ann')
  assert.equal(connection.config.password, 'app-pass')
  assert.equal(connection.readOnly, true, 'read-only unless the file says readOnly: false')
  assert.equal(await loadPersonConnection(dir, '../ann'), undefined, 'a person id is never a path')
  assert.equal(await loadPersonConnection(dir, 'bob'), undefined)
})

test('a verified user id maps to a person through inline entries or a file', async (t) => {
  const dir = scratch(t)
  writeFileSync(join(dir, 'people.json'), JSON.stringify({ oidc_users: { 'sub-1': 'Ann' } }))
  const options = { peopleFile: join(dir, 'people.json'), peopleKey: 'oidc_users', people: { 'sub-2': 'bob' } }
  assert.equal(await personFor(options, 'sub-1'), 'ann')
  assert.equal(await personFor(options, 'sub-2'), 'bob')
  assert.equal(await personFor(options, 'sub-3'), undefined)
  assert.equal(await personFor({ peopleFile: join(dir, 'missing.json') }, 'sub-1'), undefined, 'an unreadable map maps nobody')
})

function peopleBackend(dir, who) {
  const calls = []
  const factory = (config) => ({
    async list() { calls.push(config.caldavUrl); return [{ uid: config.caldavUrl + 'e.ics', href: config.caldavUrl + 'e.ics', summary: 'from ' + config.caldavUrl, start: '2026-11-18T14:00:00Z', end: '2026-11-18T15:00:00Z', allDay: false }] },
    async create() { throw new Error('should not be reached') },
  })
  const backend = new CalendarSettingsBackend({
    people: { people: { 'sub-ann': 'ann', 'sub-bob': 'bob' }, connectionsDir: dir },
    identity: () => (who.id === null ? undefined : { current: () => (who.id === '' ? null : { id: who.id }) }),
    env: {},
  })
  return { backend, calls, factory }
}

test('each person sees only their own calendars, and never anyone else\'s password', async (t) => {
  const dir = scratch(t)
  writePerson(dir, 'ann', { provider: 'custom', username: 'ann', password: 'ann-secret', calendars: [{ name: 'Ann home', url: 'https://cal.example/ann/home/' }] })
  const who = { id: 'sub-ann' }
  const { backend } = peopleBackend(dir, who)

  const own = await (await backend.fetch(post({ action: 'connection' }))).json()
  assert.equal(own.value.person, 'ann')
  assert.deepEqual(own.value.calendars, ['Ann home'])
  assert.equal(own.value.hasPassword, true)
  assert.equal(JSON.stringify(own).includes('ann-secret'), false, 'the password never goes to the browser')

  who.id = 'sub-bob'
  const other = await (await backend.fetch(post({ action: 'connection' }))).json()
  assert.equal(other.value.configured, false, 'bob has no connection file and sees nothing of ann')
  assert.equal(JSON.stringify(other).includes('Ann home'), false)

  who.id = 'sub-stranger'
  assert.equal((await backend.fetch(post({ action: 'connection' }))).status, 403)
  who.id = ''
  assert.equal((await backend.fetch(post({ action: 'connection' }))).status, 401)
})

test('without a sign-in plugin people mode refuses instead of falling back to a shared calendar', async (t) => {
  const dir = scratch(t)
  const { backend } = peopleBackend(dir, { id: null })
  assert.equal((await backend.fetch(post({ action: 'connection' }))).status, 503)
})

test('a read-only connection refuses writes before any request goes out', async (t) => {
  const dir = scratch(t)
  writePerson(dir, 'ann', { provider: 'custom', username: 'ann', password: 'x', calendars: [{ name: 'A', url: 'https://cal.example/a/' }] })
  const { backend } = peopleBackend(dir, { id: 'sub-ann' })
  const reply = await backend.fetch(post({ action: 'create', summary: 'x', start: '2026-11-18T14:00:00Z', end: '2026-11-18T15:00:00Z' }))
  assert.equal(reply.status, 400)
  assert.match((await reply.json()).error.message, /read-only/)
})

test('the request gate accepts same-origin JSON behind a proxy and refuses the rest', () => {
  assert.equal(fetchVerdict(post({}, { origin: 'https://dsh.example' })), undefined)
  assert.equal(fetchVerdict(post({}, { origin: 'https://evil.example' })).status, 403)
  assert.equal(fetchVerdict(post({}, { 'sec-fetch-site': 'cross-site' })).status, 403)
  assert.equal(fetchVerdict(new Request('https://dsh.example/x', { method: 'POST', body: 'a=b', headers: { 'content-type': 'text/plain' } })).status, 415)
})

test('tools: false registers no model tools and keeps the panel routes', (t) => {
  const home = mkdtempSync(join(tmpdir(), 'dsh-calendar-tools-'))
  t.after(() => rmSync(home, { recursive: true, force: true }))
  const previous = process.env.DSH_HOME
  process.env.DSH_HOME = home
  t.after(() => { if (previous === undefined) delete process.env.DSH_HOME; else process.env.DSH_HOME = previous })
  const count = (config) => {
    const registered = [], routes = []
    const child = { appReady: { onReady: (fn) => { fn(); return () => {} } }, effect: (fn) => { fn(); return () => {} } }
    const ctx = { connection: { fetch: { register: (route) => { routes.push(route.path); return () => {} } } }, tools: { register(def) { registered.push(def.name); return () => {} } }, on: () => () => {}, effect: (fn) => { fn(); return () => {} }, inject: (_services, callback) => callback(child) }
    const warn = console.warn
    console.warn = () => {}
    try { apply(ctx, config) } finally { console.warn = warn }
    return { tools: registered.length, routes }
  }
  assert.ok(count({}).tools > 0)
  const off = count({ tools: false })
  assert.equal(off.tools, 0)
  assert.ok(off.routes.includes('/api/dsh-calendar/settings'))
})
