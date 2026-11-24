import type { CalendarSettingsFace } from './web.js';
/** dsh-oidc requestIdentity contract used by the optional identity provider. */
export interface RequestIdentityLike {
    current(): {
        readonly id: string;
        readonly name?: string;
    } | null;
}
export type CalendarPersonCaller = {
    readonly kind: 'person';
    /** Namespaced, exact subject; never normalized or case-folded. */
    readonly subject: string;
};
export type CalendarCaller = {
    readonly kind: 'owner';
} | CalendarPersonCaller;
export declare class CalendarIdentityError extends Error {
    constructor();
}
/**
 * Resolve only identities supplied by trusted Host services. The owner keeps the
 * existing single connection; an authenticated OIDC identity or a trusted
 * non-owner Principal gets its own exact, namespaced subject. An unavailable or
 * malformed configured identity service is an error, never an owner fallback.
 */
export declare function resolveCalendarCaller(principal: unknown, requestIdentity?: RequestIdentityLike, people?: PeopleOptions): CalendarCaller;
/**
 * A people map names who is behind a verified sign-in: `people` inline, or `peopleFile` (JSON, the
 * object under `peopleKey` when set), read on every request so edits apply at once. Several sign-ins
 * may map to one person, who then has one connection file, `<connectionsDir>/<person>.json`.
 */
export interface PeopleOptions {
    people?: Record<string, string>;
    peopleFile?: string;
    peopleKey?: string;
}
export declare function peopleEnabled(options: PeopleOptions): boolean;
/** The person a verified sign-in id belongs to; an unreadable file or an unsafe name maps nobody. */
export declare function personFor(options: PeopleOptions, id: string): string | undefined;
/** Stable opaque filename key; the original subject's case and code points matter. */
export declare function personStorageKey(subject: string): string;
/** The file path is a mapped person's own name or a SHA-256 digest, never a user-supplied ID. */
export declare function personConnectionFile(connectionsDir: string, caller: CalendarPersonCaller): string;
/**
 * Create a CalendarSettingsFace backed by this person's independent server-side
 * JSON file. A missing file is an empty revision-0 store; corrupt files and IO
 * errors fail closed. replace() uses per-file serialization + revision CAS and
 * an fsync'ed same-directory temporary file followed by atomic rename.
 */
export declare function createPersonSettingsFace(connectionsDir: string, caller: CalendarPersonCaller): CalendarSettingsFace;
/** Async convenience for integrations that need to read the isolated record. */
export declare function readPersonSettings(connectionsDir: string, caller: CalendarPersonCaller): Promise<Record<string, unknown>>;
