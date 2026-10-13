export interface AdminShowRowDto {
    id: string;
    name: string;
    city: string;
    /** City UUID (FK to cities.id) */
    city_id: string;
    start_date: string;
    /** Show run end date; archive cron uses this */
    end_date: string;
    category?: Record<string, unknown> | undefined;
    categories: string[];
    color_scheme?: Record<string, unknown> | undefined;
    /** Preview mode for the show card */
    preview_mode: AdminShowRowDto.PreviewMode;
    /** Show visibility: 1 = active (visible in app), 0 = inactive */
    status: number;
    created_at: string;
    /** Combined remaining seats across all sessions and tiers (from show_ticket_balance.seat_balance) */
    ticket_available?: (Record<string, unknown> | null) | undefined;
}
export declare namespace AdminShowRowDto {
    /** Preview mode for the show card */
    const PreviewMode: {
        readonly Video: "video";
        readonly Image: "image";
    };
    type PreviewMode = (typeof PreviewMode)[keyof typeof PreviewMode];
}
//# sourceMappingURL=AdminShowRowDto.d.ts.map