import type * as TremApi from "../index.js";
export interface ShowArticleDto {
    id: string;
    title: string;
    url: string;
    image_url?: (Record<string, unknown> | null) | undefined;
    city_venue: string;
    news_date: string;
    highlight?: (Record<string, unknown> | null) | undefined;
    tags: TremApi.ShowTagDto[];
}
//# sourceMappingURL=ShowArticleDto.d.ts.map