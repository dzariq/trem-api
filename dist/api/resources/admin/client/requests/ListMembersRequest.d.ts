/**
 * @example
 *     {
 *         groupId: "groupId"
 *     }
 */
export interface ListMembersRequest {
    /** User group UUID */
    groupId: string;
    page?: number;
    per_page?: number;
    /** Search members by user id, email, or name */
    q?: string;
}
//# sourceMappingURL=ListMembersRequest.d.ts.map