export interface RegisterFcmTokenDataDto {
    /** user_fcm_token.id */
    id: string;
    /** FK to users.id */
    user_id: string;
    platform: RegisterFcmTokenDataDto.Platform | null;
    /** ISO timestamp */
    updated_at: string;
}
export declare namespace RegisterFcmTokenDataDto {
    const Platform: {
        readonly Android: "android";
        readonly Ios: "ios";
        readonly Web: "web";
    };
    type Platform = (typeof Platform)[keyof typeof Platform];
}
//# sourceMappingURL=RegisterFcmTokenDataDto.d.ts.map