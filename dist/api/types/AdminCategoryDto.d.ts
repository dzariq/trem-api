export interface AdminCategoryDto {
    id: string;
    label: string;
    icon_url: string;
    filter_type: AdminCategoryDto.FilterType;
    filter_value?: Record<string, unknown> | undefined;
    created_at: string;
}
export declare namespace AdminCategoryDto {
    const FilterType: {
        readonly Category: "category";
        readonly All: "all";
    };
    type FilterType = (typeof FilterType)[keyof typeof FilterType];
}
//# sourceMappingURL=AdminCategoryDto.d.ts.map