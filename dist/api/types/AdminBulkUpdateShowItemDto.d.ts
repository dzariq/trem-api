export interface AdminBulkUpdateShowItemDto {
    /** Show UUID */
    id: string;
    name?: string | undefined;
    city_id?: string | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    venue_id?: (Record<string, unknown> | null) | undefined;
    status?: number | undefined;
    preview_mode?: AdminBulkUpdateShowItemDto.PreviewMode | undefined;
    loyalty_points_per_booking?: number | undefined;
}
export declare namespace AdminBulkUpdateShowItemDto {
    const PreviewMode: {
        readonly Video: "video";
        readonly Image: "image";
    };
    type PreviewMode = (typeof PreviewMode)[keyof typeof PreviewMode];
}
//# sourceMappingURL=AdminBulkUpdateShowItemDto.d.ts.map