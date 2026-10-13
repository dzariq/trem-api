export interface AdminShowSessionDto {
    id: string;
    show_id: string;
    session_date: string;
    session_time: string;
    /** Custom title; public API uses as session_label when set */
    session_name?: (string | null) | undefined;
    /** Promo badge text returned on public GET /api/shows/:showId/sessions */
    description?: (string | null) | undefined;
    /** Sum of tier capacities (ticket_categories.available_seats) */
    available_seats: number;
    /** Sum of tier remaining seats for this session */
    remaining_seats: number;
    created_at: string;
}
//# sourceMappingURL=AdminShowSessionDto.d.ts.map