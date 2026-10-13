/**
 * @example
 *     {
 *         assetId: "assetId"
 *     }
 */
export interface AdminUpdateAssetDto {
    assetId: string;
    name?: string;
    /** Move into this directory. Null moves to root. */
    directory_id?: Record<string, unknown> | null;
}
//# sourceMappingURL=AdminUpdateAssetDto.d.ts.map