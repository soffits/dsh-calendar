/** Several CalDAV collections behind one calendar service: reads merge, writes go to one place. */
import { type CalendarConfig } from './config.js';
import type { CalendarServiceLike } from './web.js';
import type { PersonConnection } from './people.js';
export declare class ReadOnlyError extends Error {
    constructor();
}
export interface MultiCalendarOptions {
    env?: NodeJS.ProcessEnv;
    /** Test hook: build the service of one collection. */
    serviceFactory?: (config: CalendarConfig) => CalendarServiceLike;
}
export declare function createMultiService(connection: PersonConnection, options?: MultiCalendarOptions): CalendarServiceLike;
