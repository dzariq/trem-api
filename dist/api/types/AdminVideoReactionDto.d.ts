export interface AdminVideoReactionDto {
    id: string;
    show_id: string;
    user_id?: Record<string, unknown> | undefined;
    review_id?: Record<string, unknown> | undefined;
    video_url: string;
    duration_secs: number;
    moderation_status: string;
    created_at: string;
    approved_at?: Record<string, unknown> | undefined;
}
//# sourceMappingURL=AdminVideoReactionDto.d.ts.map