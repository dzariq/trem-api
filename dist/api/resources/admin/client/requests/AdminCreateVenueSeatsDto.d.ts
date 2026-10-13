/**
 * @example
 *     {
 *         rowId: "rowId",
 *         seat_numbers: [19, 20, 21, 22, 23]
 *     }
 */
export interface AdminCreateVenueSeatsDto {
    rowId: string;
    /** Seat numbers to create in this row */
    seat_numbers: number[];
    /** Ticket tier name (resolved per session at booking — Approach A). Must match ticket_categories.tier_name. */
    tier_name?: Record<string, unknown>;
    status?: AdminCreateVenueSeatsDto.Status;
}
export declare namespace AdminCreateVenueSeatsDto {
    const Status: {
        readonly Active: "active";
        readonly Blocked: "blocked";
        readonly Wheelchair: "wheelchair";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=AdminCreateVenueSeatsDto.d.ts.map