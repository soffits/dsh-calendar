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
import { chmod, readFile, rename, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
export const personKey = (value) => typeof value === 'string' ? value.trim().normalize('NFKC').toLowerCase() : '';
/** People mode is on when any mapping is configured. */
export function peopleEnabled(options) {
    return Object.keys(options.people ?? {}).length > 0 || (options.peopleFile ?? '') !== '';
}
async function mappingFromFile(file, key) {
    let value = JSON.parse(await readFile(file, 'utf8'));
    if (key)
        value = value?.[key];
    if (typeof value !== 'object' || value === null || Array.isArray(value))
        throw new Error(`no object at ${key ?? 'the top level'}`);
    return Object.entries(value).filter((entry) => typeof entry[1] === 'string');
}
/** The person id for a verified user id; a mapping that can't be read maps nobody. */
export async function personFor(options, userId, warn = () => { }) {
    let entries = [];
    if (options.peopleFile) {
        try {
            entries = await mappingFromFile(options.peopleFile, options.peopleKey);
        }
        catch (error) {
            warn(`dsh-calendar: people file ${options.peopleFile}: ${error.message}; nobody is mapped from it`);
        }
    }
    const found = new Map([...entries, ...Object.entries(options.people ?? {})]).get(userId);
    return found === undefined ? undefined : personKey(found);
}
const SAFE_PERSON = /^[a-z0-9][a-z0-9._-]{0,63}$/;
/** Read one person's connection file; undefined when they have none. */
export async function loadPersonConnection(dir, person) {
    if (!SAFE_PERSON.test(person))
        return undefined;
    const file = join(dir, person + '.json');
    try {
        await stat(file);
    }
    catch {
        return undefined;
    }
    const raw = JSON.parse(await readFile(file, 'utf8'));
    const text = (key) => typeof raw[key] === 'string' && raw[key] !== '' ? raw[key] : undefined;
    let password = text('password');
    const passwordFile = text('passwordFile');
    if (password === undefined && passwordFile !== undefined)
        password = (await readFile(passwordFile, 'utf8')).trim();
    const calendars = (Array.isArray(raw.calendars) ? raw.calendars : [])
        .filter((row) => typeof row === 'object' && row !== null && typeof row.url === 'string')
        .map((row) => ({ url: row.url, name: typeof row.name === 'string' && row.name !== '' ? row.name : row.url }));
    const config = {
        provider: (text('provider') ?? 'custom'),
        ...(text('username') !== undefined ? { username: text('username') } : {}),
        ...(password !== undefined ? { password } : {}),
        ...(text('proxyUrl') !== undefined ? { proxyUrl: text('proxyUrl') } : {}),
        ...(calendars[0] !== undefined ? { caldavUrl: calendars[0].url } : {}),
    };
    return {
        config, calendars, readOnly: raw.readOnly !== false,
        ...(text('writeCalendar') !== undefined ? { writeCalendar: text('writeCalendar') } : {}),
        ...(typeof raw.floatingButton === 'boolean' ? { floatingButton: raw.floatingButton } : {}),
    };
}
/** Keep one preference with the person's other calendar settings: rewrite their file, every other key untouched. */
export async function savePersonPreference(dir, person, key, value) {
    if (!SAFE_PERSON.test(person))
        throw new Error('No calendar file for this person.');
    const file = join(dir, person + '.json');
    const { mode } = await stat(file).catch(() => { throw new Error('This person has no connection file to keep settings in.'); });
    const raw = JSON.parse(await readFile(file, 'utf8'));
    raw[key] = value;
    const temp = file + '.tmp';
    await writeFile(temp, JSON.stringify(raw, null, 2) + '\n', { mode });
    await chmod(temp, mode);
    await rename(temp, file);
}
