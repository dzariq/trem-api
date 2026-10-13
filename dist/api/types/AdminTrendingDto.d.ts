import type * as TremApi from "../index.js";
export interface AdminTrendingDto {
    id: string;
    video_url: string;
    /** Preview image URL (jpg/png/svg/gif) */
    image_preview: Record<string, unknown> | null;
    title: string;
    author: string;
    link_url: string;
    /** Show opened from this trending reel */
    show_id: Record<string, unknown> | null;
    status: AdminTrendingDto.Status;
    show?: (TremApi.TrendingShowSummaryDto | null) | undefined;
    created_at: string;
    updated_at: string;
}
export declare namespace AdminTrendingDto {
    const Status: {
        readonly Active: "active";
        readonly Inactive: "inactive";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=AdminTrendingDto.d.ts.map