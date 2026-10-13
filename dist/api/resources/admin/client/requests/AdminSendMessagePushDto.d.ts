/**
 * @example
 *     {
 *         title: "New show alert",
 *         body: "Tickets are on sale now."
 *     }
 */
export interface AdminSendMessagePushDto {
    /** Send to a custom FCM topic (alternative to user_ids / user_group_id). Use the same name as mobile `subscribeToTopic` (e.g. `xxx` or `event: xxx`). */
    topic?: string;
    /** Send to all members of this user group (alternative to user_ids / topic) */
    user_group_id?: string;
    /** Target user UUIDs (ignored when user_group_id or topic is set) */
    user_ids?: string[];
    title: string;
    body: string;
    /** FCM data.show_id (optional; used with topic sends) */
    show_id?: string;
    /** FCM data.show_color (optional; used with topic sends) */
    show_color?: string;
    /** FCM data.type (optional; used with topic sends) */
    type?: string;
}
//# sourceMappingURL=AdminSendMessagePushDto.d.ts.map