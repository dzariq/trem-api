export interface AdminSendFcmTopicDataDto {
    fcm_enabled: boolean;
    /** Normalized FCM topic name used for delivery */
    topic: string;
    /** Firebase message id when send succeeded */
    message_id?: Record<string, unknown> | undefined;
}
//# sourceMappingURL=AdminSendFcmTopicDataDto.d.ts.map