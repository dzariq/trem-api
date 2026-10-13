import type * as TremApi from "../index.js";
export interface ShowReviewDto {
    id: string;
    /** Reviewer user id */
    user_id?: (Record<string, unknown> | null) | undefined;
    /** Reviewer display name */
    user_name?: (Record<string, unknown> | null) | undefined;
    star_rating?: Record<string, unknown> | undefined;
    written_review?: Record<string, unknown> | undefined;
    recommends: boolean;
    verified_purchase: boolean;
    created_at: string;
    moderation_status: string;
    video_reactions: TremApi.ShowVideoReactionDto[];
}
//# sourceMappingURL=ShowReviewDto.d.ts.map