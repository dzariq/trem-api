export interface AdminShowFinalWeekDto {
    id: string;
    show_id: string;
    show_name: Record<string, unknown> | null;
    end_date: string;
    /** Days-before-end window used when logged */
    days_before_end: number;
    logged_at: string;
    notify: boolean;
    fcm_sent: number;
}
//# sourceMappingURL=AdminShowFinalWeekDto.d.ts.map