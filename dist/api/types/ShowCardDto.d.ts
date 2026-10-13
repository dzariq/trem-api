import type * as TremApi from "../index.js";
export interface ShowCardDto {
    id: string;
    name: string;
    city: string;
    /** City UUID (FK to cities.id) */
    city_id: string;
    /** 1 if the current user has saved this show (show_saved.status=1), else 0. */
    is_saved: number;
    show_image_url: string;
    /** Portrait/card poster image URL */
    image_poster?: (Record<string, unknown> | null) | undefined;
    description?: Record<string, unknown> | undefined;
    /** FK to venues.id */
    venue_id?: (Record<string, unknown> | null) | undefined;
    venue_name?: (Record<string, unknown> | null) | undefined;
    venue_lat?: (Record<string, unknown> | null) | undefined;
    venue_lng?: (Record<string, unknown> | null) | undefined;
    subtitles: string[];
    start_date: string;
    /** Show run end date */
    end_date: string;
    rating_average: number;
    rating_count: number;
    categories: string[];
    /** Tags from the `tags` table (e.g. Headline, Latest) */
    tags: TremApi.ShowTagDto[];
    /** Preview mode for the show card */
    preview_mode: ShowCardDto.PreviewMode;
    /** Show visibility: 1 = active (visible in app), 0 = inactive */
    status: number;
    videos: TremApi.ShowVideoDto[];
    reviews: TremApi.ShowReviewDto[];
    show_sessions: TremApi.ShowSessionDto[];
    /** Lowest ticket tier price for this show */
    ticket_price_from?: (Record<string, unknown> | null) | undefined;
    /** Highest ticket tier price for this show */
    ticket_price_to?: (Record<string, unknown> | null) | undefined;
    next_session?: (TremApi.ShowNextSessionDto | null) | undefined;
    urgency?: (TremApi.ShowUrgencyDto | null) | undefined;
    /** Articles linked to this show */
    articles: TremApi.ShowArticleDto[];
}
export declare namespace ShowCardDto {
    /** Preview mode for the show card */
    const PreviewMode: {
        readonly Video: "video";
        readonly Image: "image";
    };
    type PreviewMode = (typeof PreviewMode)[keyof typeof PreviewMode];
}
//# sourceMappingURL=ShowCardDto.d.ts.map