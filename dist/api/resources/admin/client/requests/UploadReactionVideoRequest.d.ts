import type * as core from "../../../../../core/index.js";
/**
 * @example
 *     {
 *         video: fs.createReadStream("/path/to/your/file"),
 *         showId: "showId"
 *     }
 */
export interface UploadReactionVideoRequest {
    /** Show UUID */
    showId: string;
    video: core.file.Uploadable;
}
//# sourceMappingURL=UploadReactionVideoRequest.d.ts.map