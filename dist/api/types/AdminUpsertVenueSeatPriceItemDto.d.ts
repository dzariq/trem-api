export interface AdminUpsertVenueSeatPriceItemDto {
    seat_id: string;
    price: number;
    currency?: string | undefined;
    /** Optional venue pricing category id */
    price_category_id?: (Record<string, unknown> | null) | undefined;
}
//# sourceMappingURL=AdminUpsertVenueSeatPriceItemDto.d.ts.map