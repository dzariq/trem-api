export interface AdminCronJobDto {
    id: string;
    name: string;
    description?: Record<string, unknown> | undefined;
    cron_expression: string;
    http_method: string;
    request_path: string;
    enabled: boolean;
    notify_on_failure: boolean;
    last_run_at?: Record<string, unknown> | undefined;
    last_run_status?: AdminCronJobDto.LastRunStatus | undefined;
    last_run_error?: Record<string, unknown> | undefined;
    created_at: string;
    updated_at: string;
}
export declare namespace AdminCronJobDto {
    const LastRunStatus: {
        readonly Success: "success";
        readonly Failed: "failed";
        readonly Skipped: "skipped";
    };
    type LastRunStatus = (typeof LastRunStatus)[keyof typeof LastRunStatus];
}
//# sourceMappingURL=AdminCronJobDto.d.ts.map