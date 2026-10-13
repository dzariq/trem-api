export interface AdminTicketExtensionLogDto {
    id: string;
    show_id: string;
    show_name: Record<string, unknown> | null;
    admin_id: string;
    changed_at: string;
    end_date_from: string;
    end_date_to: string;
    notify: boolean;
    fcm_sent: number;
}
//# sourceMappingURL=AdminTicketExtensionLogDto.d.ts.map