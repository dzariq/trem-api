/**
 * @example
 *     {
 *         userId: "userId",
 *         tier_id: "tier_id"
 *     }
 */
export interface AdminUpsertUserMembershipDto {
    /** User UUID */
    userId: string;
    /** Membership tier UUID */
    tier_id: string;
    /** Calendar year (defaults to current year) */
    year?: number;
    /** Complimentary tickets left this year (defaults to tier annual quota on create) */
    tickets_remaining?: number;
}
//# sourceMappingURL=AdminUpsertUserMembershipDto.d.ts.map