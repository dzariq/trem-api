/**
 * @example
 *     {
 *         name: "Campaigns"
 *     }
 */
export interface AdminCreateAssetDirectoryDto {
    name: string;
    /** Parent directory UUID. Omit or null for root. */
    parent_id?: Record<string, unknown> | null;
}
//# sourceMappingURL=AdminCreateAssetDirectoryDto.d.ts.map