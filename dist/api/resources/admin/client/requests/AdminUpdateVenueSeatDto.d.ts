/**
 * @example
 *     {
 *         seatId: "seatId"
 *     }
 */
export interface AdminUpdateVenueSeatDto {
    seatId: string;
    seat_number?: number;
    status?: AdminUpdateVenueSeatDto.Status;
    tier_name?: Record<string, unknown> | null;
}
export declare namespace AdminUpdateVenueSeatDto {
    const Status: {
        readonly Active: "active";
        readonly Blocked: "blocked";
        readonly Wheelchair: "wheelchair";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=AdminUpdateVenueSeatDto.d.ts.map