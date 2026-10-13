export interface AdminFcmTokenListItemDto {
    id: string;
    user_id: string;
    platform: AdminFcmTokenListItemDto.Platform | null;
    updated_at: string;
    /** Truncated FCM token for display */
    token_preview: string;
    /** Full FCM token (admin list only; for unregister in CMS) */
    token: string;
}
export declare namespace AdminFcmTokenListItemDto {
    const Platform: {
        readonly Android: "android";
        readonly Ios: "ios";
        readonly Web: "web";
    };
    type Platform = (typeof Platform)[keyof typeof Platform];
}
//# sourceMappingURL=AdminFcmTokenListItemDto.d.ts.map