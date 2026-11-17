import type { CalendarConfig } from './config.js';
export interface PeopleOptions {
    people?: Record<string, string>;
    peopleFile?: string;
    peopleKey?: string;
    connectionsDir?: string;
}
export interface CalendarRef {
    name: string;
    url: string;
}
export interface PersonConnection {
    config: CalendarConfig;
    calendars: CalendarRef[];
    readOnly: boolean;
    writeCalendar?: string;
}
export interface RequestIdentityLike {
    current(): {
        id: string;
        name?: string;
    } | null;
}
export declare const personKey: (value: unknown) => string;
/** People mode is on when any mapping is configured. */
export declare function peopleEnabled(options: PeopleOptions): boolean;
/** The person id for a verified user id; a mapping that can't be read maps nobody. */
export declare function personFor(options: PeopleOptions, userId: string, warn?: (message: string) => void): Promise<string | undefined>;
/** Read one person's connection file; undefined when they have none. */
export declare function loadPersonConnection(dir: string, person: string): Promise<PersonConnection | undefined>;
