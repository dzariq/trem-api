import type * as TremApi from "../../../../index.js";
/**
 * @example
 *     {
 *         showId: "showId"
 *     }
 */
export interface AdminUpsertShowVenueTierPricesDto {
    /** Show UUID */
    showId: string;
    /** When set, prices apply to this session only. Omit (or use apply_to_all_sessions) to update every session. */
    session_id?: string;
    /** When true with session_id, copies the submitted prices to all sessions on the show. */
    apply_to_all_sessions?: boolean;
    /** When true, the show uses the venue default prices (a snapshot is copied on save). Custom items/row/seat prices are ignored. */
    use_venue_default_pricing?: boolean;
    items?: TremApi.AdminUpsertShowVenueTierPriceItemDto[];
    seat_pricing_mode?: AdminUpsertShowVenueTierPricesDto.SeatPricingMode;
    row_prices?: TremApi.AdminUpsertShowVenueRowPriceItemDto[];
    seat_prices?: TremApi.AdminUpsertShowVenueSeatPriceItemDto[];
    /** Price bands for this show. Each band groups sections and carries a min/max display range. */
    bands?: TremApi.AdminUpsertShowPriceBandItemDto[];
}
export declare namespace AdminUpsertShowVenueTierPricesDto {
    const SeatPricingMode: {
        readonly Tier: "tier";
        readonly Row: "row";
        readonly Seat: "seat";
    };
    type SeatPricingMode = (typeof SeatPricingMode)[keyof typeof SeatPricingMode];
}
//# sourceMappingURL=AdminUpsertShowVenueTierPricesDto.d.ts.map