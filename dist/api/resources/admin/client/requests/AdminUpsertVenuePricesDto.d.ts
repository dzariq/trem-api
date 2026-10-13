import type * as TremApi from "../../../../index.js";
/**
 * @example
 *     {
 *         venueId: "venueId",
 *         items: [{
 *                 venue_tier_id: "venue_tier_id",
 *                 price: 1.1
 *             }]
 *     }
 */
export interface AdminUpsertVenuePricesDto {
    /** Venue UUID */
    venueId: string;
    items: TremApi.AdminUpsertVenueTierPriceItemDto[];
    seat_pricing_mode?: AdminUpsertVenuePricesDto.SeatPricingMode;
    row_prices?: TremApi.AdminUpsertVenueRowPriceItemDto[];
    seat_prices?: TremApi.AdminUpsertVenueSeatPriceItemDto[];
}
export declare namespace AdminUpsertVenuePricesDto {
    const SeatPricingMode: {
        readonly Tier: "tier";
        readonly Row: "row";
        readonly Seat: "seat";
    };
    type SeatPricingMode = (typeof SeatPricingMode)[keyof typeof SeatPricingMode];
}
//# sourceMappingURL=AdminUpsertVenuePricesDto.d.ts.map