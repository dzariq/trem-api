/**
 * @example
 *     {
 *         userId: "userId",
 *         points_delta: 100
 *     }
 */
export interface AdminAdjustLoyaltyPointsDto {
    /** User UUID */
    userId: string;
    /** Points to add (positive) or deduct (negative) */
    points_delta: number;
    note?: string;
}
//# sourceMappingURL=AdminAdjustLoyaltyPointsDto.d.ts.map