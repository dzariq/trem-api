/**
 * @example
 *     {
 *         venueId: "venueId",
 *         seatId: "seatId",
 *         session_id: "session_id"
 *     }
 */
export interface AdminBlockVenueSeatDto {
    /** Venue UUID */
    venueId: string;
    /** Venue seat UUID */
    seatId: string;
    /** Show session UUID */
    session_id: string;
    /** How long the seat remains unavailable (minutes). Required if expires_at is omitted. */
    duration_minutes?: number;
    /** Absolute expiry (ISO-8601). Future only; max 365 days from now. Required if duration_minutes is omitted. */
    expires_at?: string;
    reason?: string;
}
//# sourceMappingURL=AdminBlockVenueSeatDto.d.ts.map