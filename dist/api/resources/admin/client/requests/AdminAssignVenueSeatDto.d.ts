/**
 * @example
 *     {
 *         venueId: "venueId",
 *         seatId: "seatId",
 *         session_id: "session_id",
 *         user_id: "user_id"
 *     }
 */
export interface AdminAssignVenueSeatDto {
    /** Venue UUID */
    venueId: string;
    /** Venue seat UUID */
    seatId: string;
    /** Show session UUID */
    session_id: string;
    /** User UUID to assign the seat to */
    user_id: string;
    /** Ticket status to create (default purchased) */
    ticket_status?: AdminAssignVenueSeatDto.TicketStatus;
}
export declare namespace AdminAssignVenueSeatDto {
    /** Ticket status to create (default purchased) */
    const TicketStatus: {
        readonly Purchased: "purchased";
        readonly Reserved: "reserved";
    };
    type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
}
//# sourceMappingURL=AdminAssignVenueSeatDto.d.ts.map