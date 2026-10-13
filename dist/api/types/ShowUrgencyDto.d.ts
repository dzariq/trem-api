export interface ShowUrgencyDto {
    type: ShowUrgencyDto.Type;
    message: string;
    session_id: string;
    session_date: string;
    session_time: string;
    price_from: number;
    remaining_seats: number;
}
export declare namespace ShowUrgencyDto {
    const Type: {
        readonly SellingFast: "selling_fast";
        readonly LowStock: "low_stock";
    };
    type Type = (typeof Type)[keyof typeof Type];
}
//# sourceMappingURL=ShowUrgencyDto.d.ts.map