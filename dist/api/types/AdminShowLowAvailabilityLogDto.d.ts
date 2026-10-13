export interface AdminShowLowAvailabilityLogDto {
    id: string;
    show_id: string;
    show_name: Record<string, unknown> | null;
    seat_balance: number;
    seat_total: number;
    threshold: number;
    logged_at: string;
    notify: boolean;
    fcm_sent: number;
}
//# sourceMappingURL=AdminShowLowAvailabilityLogDto.d.ts.map