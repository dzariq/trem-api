export interface AdminSurveyDto {
    /** Survey UUID */
    id: string;
    name: string;
    category_id: string;
    category_label: string;
    launch_date: string;
    expiry_date: string;
    /** Survey visibility: 1 = active (visible in app), 0 = inactive */
    status: number;
    /** CDN URL when configured */
    video_url: string;
    image_url?: (Record<string, unknown> | null) | undefined;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=AdminSurveyDto.d.ts.map