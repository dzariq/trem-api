export interface AdminErrorLogRowDto {
    id: string;
    created_at: string;
    level: AdminErrorLogRowDto.Level;
    http_method: string;
    path: string;
    status_code: number;
    message: string;
    stack: string | null;
    actor_user_id: string | null;
    actor_email: string | null;
    actor_role: string | null;
}
export declare namespace AdminErrorLogRowDto {
    const Level: {
        readonly Error: "error";
        readonly Warn: "warn";
    };
    type Level = (typeof Level)[keyof typeof Level];
}
//# sourceMappingURL=AdminErrorLogRowDto.d.ts.map