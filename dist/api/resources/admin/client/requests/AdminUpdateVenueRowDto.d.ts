/**
 * @example
 *     {
 *         rowId: "rowId"
 *     }
 */
export interface AdminUpdateVenueRowDto {
    rowId: string;
    row_label?: string;
    sort_order?: number;
    distance_from_stage_m?: Record<string, unknown>;
    sightline_rating?: Record<string, unknown>;
}
//# sourceMappingURL=AdminUpdateVenueRowDto.d.ts.map