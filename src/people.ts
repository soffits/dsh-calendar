/**
 * Per-person connections: who is behind a request, and which calendars are theirs.
 *
 * The caller comes from a `requestIdentity` service when one is installed (dsh-oidc
 * provides it): its verified user id maps to a person id through `people` (inline) or
 * `peopleFile` (JSON, optionally an object under `peopleKey`). Each person has one file
 * `<connectionsDir>/<person>.json` that lives on the server only:
 *
 *   { "provider": "icloud", "username": "...", "passwordFile": "/path/to/app-password",
 *     "readOnly": true, "calendars": [{ "name": "Personal", "url": "https://..." }] }
 *
 * The password is read from `passwordFile` (or `password`) when a service is built and never
 * leaves the process. Without a mapping the plugin keeps its single shared connection.
 */
import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'
import type { CalendarConfig } from './config.js'

export interface PeopleOptions {
  people?: Record<string, string>
  peopleFile?: string
  peopleKey?: string
  connectionsDir?: string
}

export interface CalendarRef { name: string; url: string }

export interface PersonConnection {
  config: CalendarConfig
  calendars: CalendarRef[]
  readOnly: boolean
  writeCalendar?: string
}

export interface RequestIdentityLike { current(): { id: string; name?: string } | null }

export const personKey = (value: unknown): string =>
  typeof value === 'string' ? value.trim().normalize('NFKC').toLowerCase() : ''

/** People mode is on when any mapping is configured. */
export function peopleEnabled(options: PeopleOptions): boolean {
  return Object.keys(options.people ?? {}).length > 0 || (options.peopleFile ?? '') !== ''
}

async function mappingFromFile(file: string, key: string | undefined): Promise<Array<[string, string]>> {
  let value: unknown = JSON.parse(await readFile(file, 'utf8'))
  if (key) value = (value as Record<string, unknown> | null)?.[key]
  if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new Error(`no object at ${key ?? 'the top level'}`)
  return Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === 'string')
}

/** The person id for a verified user id; a mapping that can't be read maps nobody. */
export async function personFor(options: PeopleOptions, userId: string, warn: (message: string) => void = () => {}): Promise<string | undefined> {
  let entries: Array<[string, string]> = []
  if (options.peopleFile) {
    try { entries = await mappingFromFile(options.peopleFile, options.peopleKey) }
    catch (error) { warn(`dsh-calendar: people file ${options.peopleFile}: ${(error as Error).message}; nobody is mapped from it`) }
  }
  const found = new Map([...entries, ...Object.entries(options.people ?? {})]).get(userId)
  return found === undefined ? undefined : personKey(found)
}

const SAFE_PERSON = /^[a-z0-9][a-z0-9._-]{0,63}$/

/** Read one person's connection file; undefined when they have none. */
export async function loadPersonConnection(dir: string, person: string): Promise<PersonConnection | undefined> {
  if (!SAFE_PERSON.test(person)) return undefined
  const file = join(dir, person + '.json')
  try { await stat(file) } catch { return undefined }
  const raw = JSON.parse(await readFile(file, 'utf8')) as Record<string, unknown>
  const text = (key: string): string | undefined => typeof raw[key] === 'string' && raw[key] !== '' ? raw[key] as string : undefined
  let password = text('password')
  const passwordFile = text('passwordFile')
  if (password === undefined && passwordFile !== undefined) password = (await readFile(passwordFile, 'utf8')).trim()
  const calendars = (Array.isArray(raw.calendars) ? raw.calendars : [])
    .filter((row): row is Record<string, unknown> => typeof row === 'object' && row !== null && typeof (row as any).url === 'string')
    .map((row) => ({ url: row.url as string, name: typeof row.name === 'string' && row.name !== '' ? row.name : (row.url as string) }))
  const config: CalendarConfig = {
    provider: (text('provider') ?? 'custom') as CalendarConfig['provider'],
    ...(text('username') !== undefined ? { username: text('username')! } : {}),
    ...(password !== undefined ? { password } : {}),
    ...(text('proxyUrl') !== undefined ? { proxyUrl: text('proxyUrl')! } : {}),
    ...(calendars[0] !== undefined ? { caldavUrl: calendars[0].url } : {}),
  }
  return {
    config, calendars, readOnly: raw.readOnly !== false,
    ...(text('writeCalendar') !== undefined ? { writeCalendar: text('writeCalendar')! } : {}),
  }
}
