/**
 * @example
 *     {
 *         user_ids: ["def36a9f-6600-48d4-9922-be6b1a00c04c"],
 *         title: "New show added!",
 *         body: "Check out the latest show near you."
 *     }
 */
export interface AdminSendFcmDto {
    /** List of user UUIDs to send the push notification to */
    user_ids: string[];
    /** Notification title */
    title: string;
    /** Notification body text */
    body: string;
    /** Optional key-value data payload (all values must be strings) */
    data?: Record<string, unknown>;
}
//# sourceMappingURL=AdminSendFcmDto.d.ts.map