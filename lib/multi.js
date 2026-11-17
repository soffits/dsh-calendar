/** Several CalDAV collections behind one calendar service: reads merge, writes go to one place. */
import { resolveConfig } from './config.js';
import { CalendarService } from './caldav.js';
export class ReadOnlyError extends Error {
    constructor() { super('This calendar connection is read-only.'); }
}
export function createMultiService(connection, options = {}) {
    const make = (url) => {
        const config = { ...connection.config, caldavUrl: url };
        return options.serviceFactory !== undefined
            ? options.serviceFactory(config)
            : new CalendarService(resolveConfig(config, options.env ?? process.env));
    };
    const parts = connection.calendars.map((calendar) => ({ ...calendar, service: make(calendar.url) }));
    const own = (uid) => parts.find((part) => uid.startsWith(part.url.replace(/\/+$/, '') + '/'));
    const writable = () => { if (connection.readOnly)
        throw new ReadOnlyError(); };
    return {
        async list(start, end, listOptions, signal) {
            const lists = await Promise.all(parts.map(async (part) => (await part.service.list(start, end, listOptions, signal)).map((event) => ({ ...event, calendar: part.name }))));
            return lists.flat();
        },
        async create(fields, signal) {
            writable();
            const target = parts.find((part) => part.name === connection.writeCalendar) ?? parts[0];
            if (target === undefined)
                throw new Error('No calendar is connected.');
            return { ...await target.service.create(fields, signal), calendar: target.name };
        },
        async update(uid, changes, signal, scope) {
            writable();
            const part = own(uid);
            if (part === undefined)
                throw new Error('That event is not in a connected calendar.');
            return part.service.update(uid, changes, signal, scope);
        },
        async delete(uid, signal, scope) {
            writable();
            const part = own(uid);
            if (part === undefined)
                throw new Error('That event is not in a connected calendar.');
            return part.service.delete(uid, signal, scope);
        },
        async get(uid, signal) {
            const part = own(uid);
            if (part === undefined || part.service.get === undefined)
                throw new Error('That event is not in a connected calendar.');
            return part.service.get(uid, signal);
        },
    };
}
