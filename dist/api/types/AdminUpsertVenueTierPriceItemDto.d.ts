export interface AdminUpsertVenueTierPriceItemDto {
    venue_tier_id: string;
    price: number;
    currency?: string | undefined;
    /** Optional venue pricing category id */
    price_category_id?: (Record<string, unknown> | null) | undefined;
}
//# sourceMappingURL=AdminUpsertVenueTierPriceItemDto.d.ts.map