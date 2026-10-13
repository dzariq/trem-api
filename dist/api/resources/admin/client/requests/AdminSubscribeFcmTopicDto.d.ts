/**
 * @example
 *     {
 *         topic: "xxx"
 *     }
 */
export interface AdminSubscribeFcmTopicDto {
    /** FCM topic (must match mobile `subscribeToTopic`) */
    topic: string;
    /** Subscribe all tokens for these users (server-side via FCM) */
    user_ids?: string[];
    /** Subscribe explicit FCM tokens (e.g. from CMS web receiver) */
    tokens?: string[];
}
//# sourceMappingURL=AdminSubscribeFcmTopicDto.d.ts.map