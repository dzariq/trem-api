export interface AdminUpsertVenueRowPriceItemDto {
    row_id: string;
    price: number;
    currency?: string | undefined;
    /** Optional venue pricing category id */
    price_category_id?: (Record<string, unknown> | null) | undefined;
}
//# sourceMappingURL=AdminUpsertVenueRowPriceItemDto.d.ts.map