export interface AdminTicketCategoryDto {
    id: string;
    show_id: string;
    session_id: string;
    tier_name: string;
    price: number;
    currency: string;
    available_seats: number;
    remaining_seats: number;
    description?: Record<string, unknown> | undefined;
    created_at: string;
}
//# sourceMappingURL=AdminTicketCategoryDto.d.ts.map