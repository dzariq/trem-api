/**
 * @example
 *     {
 *         venueId: "venueId"
 *     }
 */
export interface ListSessionsForDateRequest {
    /** Venue UUID */
    venueId: string;
    /** YYYY-MM-DD. Defaults to today. */
    date?: string;
    /** Optional show UUID to filter sessions on the given date. */
    show_id?: string;
}
//# sourceMappingURL=ListSessionsForDateRequest.d.ts.map