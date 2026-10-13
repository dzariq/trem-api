export interface ShowVideoDto {
    id: string;
    video_url: string;
    /** Display title for this video clip */
    title?: (Record<string, unknown> | null) | undefined;
    /** Poster for this video only. A frame from the file is captured on upload. */
    poster_image_url?: (Record<string, unknown> | null) | undefined;
    /** Animated GIF from 10 random frames of this video, generated on upload. */
    gif_url?: (Record<string, unknown> | null) | undefined;
    duration_seconds: number;
    kind: string;
    sort_order: number;
    /** Indicates the main/hero video for the show. */
    is_main: boolean;
}
//# sourceMappingURL=ShowVideoDto.d.ts.map