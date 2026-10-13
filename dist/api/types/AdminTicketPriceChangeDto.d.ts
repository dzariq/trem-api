export interface AdminTicketPriceChangeDto {
    id: string;
    ticket_category_id: string;
    show_id: string;
    admin_id: string;
    changed_at: string;
    price_from: string;
    price_to: string;
    direction: AdminTicketPriceChangeDto.Direction;
    notify: boolean;
    fcm_sent: number;
}
export declare namespace AdminTicketPriceChangeDto {
    const Direction: {
        readonly Increase: "increase";
        readonly Decrease: "decrease";
    };
    type Direction = (typeof Direction)[keyof typeof Direction];
}
//# sourceMappingURL=AdminTicketPriceChangeDto.d.ts.map