import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { apply, AUTH_SETTINGS_ROUTE, personFor, resolveCalendarCaller } from '../lib/index.js'

function mount(t, config) {
  const directory = mkdtempSync(join(tmpdir(), 'calendar-people-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  const routes = new Map()
  let user = null
  const provider = { register(_ns, _schema, options) { return { get: () => options.base } }, describe: () => [], async replace() { throw new Error('owner settings are not written here') } }
  const ctx = {
    settings: provider,
    tools: { register() { return () => {} } },
    get(name) { return name === 'settings' ? provider : name === 'requestIdentity' ? { current: () => user } : undefined },
    effect(fn) { fn() },
    inject(names, callback) {
      if (names.includes('connection')) callback({ connection: { admit: () => ({ peer: { principal: { kind: 'owner' } } }), fetch: { register(route) { routes.set(route.path, route); return () => {} } } }, effect(fn) { fn() } })
    },
  }
  const dir = join(directory, 'people')
  apply(ctx, { tools: false, connectionsDir: dir, ...config(directory) })
  const request = async (body) => {
    const response = await routes.get(AUTH_SETTINGS_ROUTE).fetch(new Request('https://dsh.example' + AUTH_SETTINGS_ROUTE, {
      method: 'POST', headers: { host: 'dsh.example', origin: 'https://dsh.example', 'content-type': 'application/json' }, body: JSON.stringify(body),
    }))
    return { status: response.status, body: await response.json() }
  }
  return { directory, dir, request, signIn(id) { user = id === null ? null : { id } } }
}

const personFile = (value) => JSON.stringify({ schemaVersion: 1, revision: 1, value })

test('a people map turns per-person mode on, and several sign-ins share one named file', async t => {
  const f = mount(t, directory => {
    writeFileSync(join(directory, 'people.json'), JSON.stringify({ oidc_users: { 'sub-a': 'Alice', 'sub-b': 'Bob' } }))
    return { peopleFile: join(directory, 'people.json'), peopleKey: 'oidc_users', people: { desk: 'alice' } }
  })
  f.signIn('sub-a')
  await f.request({ action: 'saveConnection', provider: 'custom', username: 'ALICE', password: 'p', caldavUrl: 'https://alice.invalid/cal/', test: false })
  assert.ok(existsSync(join(f.dir, 'alice.json')), 'a mapped person is stored under their own name')
  f.signIn('desk')
  assert.equal((await f.request({ action: 'connection' })).body.value.username, 'ALICE', 'a second sign-in of the same person sees the same connection')
  f.signIn('sub-b')
  assert.equal((await f.request({ action: 'connection' })).body.value.username, '', 'another person starts empty')
  f.signIn('stranger')
  await f.request({ action: 'saveConnection', provider: 'custom', username: 'S', password: 'p', caldavUrl: 'https://s.invalid/cal/', test: false })
  assert.ok(existsSync(join(f.dir, 'alice.json')))
  assert.equal(readFileSync(join(f.dir, 'alice.json'), 'utf8').includes('"S"'), false, 'an unmapped sign-in never reaches a mapped file')
  f.signIn(null)
  assert.equal((await f.request({ action: 'connection' })).status, 403)
})

test('person names stay file-safe and the map is read at each call', t => {
  const directory = mkdtempSync(join(tmpdir(), 'calendar-map-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  const file = join(directory, 'people.json')
  writeFileSync(file, JSON.stringify({ a: '../etc', b: 'Ünïcode name', c: 'ok' }))
  assert.equal(personFor({ peopleFile: file }, 'a'), undefined)
  assert.equal(personFor({ peopleFile: file }, 'b'), undefined)
  assert.equal(personFor({ peopleFile: file }, 'c'), 'ok')
  writeFileSync(file, JSON.stringify({ c: 'changed' }))
  assert.equal(personFor({ peopleFile: file }, 'c'), 'changed')
  assert.equal(personFor({ peopleFile: join(directory, 'missing.json') }, 'c'), undefined)
  assert.deepEqual(resolveCalendarCaller(undefined, { current: () => ({ id: 'c' }) }, { peopleFile: file }), { kind: 'person', subject: 'person:changed' })
  assert.deepEqual(resolveCalendarCaller(undefined, { current: () => ({ id: 'x' }) }, { peopleFile: file }), { kind: 'person', subject: 'oidc:x' })
})

test('passwordFile counts as the password, and a form save keeps it and the person\'s preferences', async t => {
  const f = mount(t, directory => {
    writeFileSync(join(directory, 'app-password'), 'secret-from-file\n', { mode: 0o600 })
    return { people: { 'sub-a': 'alice' }, floatingButton: false }
  })
  const { mkdirSync } = await import('node:fs')
  mkdirSync(f.dir, { recursive: true })
  writeFileSync(join(f.dir, 'alice.json'), personFile({
    provider: 'icloud', username: 'a@example.com', passwordFile: join(f.directory, 'app-password'), readOnly: true,
    calendars: [{ id: 'home', name: 'Home', url: 'https://cal.invalid/home/' }, { id: 'work', name: 'Work', url: 'https://cal.invalid/work/' }],
  }))
  f.signIn('sub-a')
  let value = (await f.request({ action: 'connection' })).body.value
  assert.equal(value.configured, true, value.reason)
  assert.equal(value.hasPassword, true)
  assert.equal(value.readOnly, true)
  assert.deepEqual(value.calendars.map(row => row.name), ['Home', 'Work'])
  assert.equal(JSON.stringify(value).includes('secret-from-file'), false)
  assert.equal(value.floatingButton, false, 'the row default applies until the person chooses')
  assert.equal(value.floatingButtonEditable, true)

  assert.equal((await f.request({ action: 'setPreferences', floatingButton: true })).status, 200)
  assert.equal((await f.request({ action: 'connection' })).body.value.floatingButton, true)
  await f.request({ action: 'saveConnection', username: 'a@example.com', test: false })
  const stored = JSON.parse(readFileSync(join(f.dir, 'alice.json'), 'utf8')).value
  assert.equal(stored.passwordFile, join(f.directory, 'app-password'))
  assert.equal(stored.floatingButton, true)
  assert.equal(stored.readOnly, true)
  assert.equal(stored.password, undefined, 'the password itself is never written into the connection file')
  assert.equal((await f.request({ action: 'setPreferences', floatingButton: 'yes' })).status, 400)
})
