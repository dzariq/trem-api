import type * as core from "../../../../../core/index.js";
/**
 * @example
 *     {
 *         video: fs.createReadStream("/path/to/your/file"),
 *         surveyId: "surveyId"
 *     }
 */
export interface UploadVideoRequest {
    /** Survey UUID */
    surveyId: string;
    video: core.file.Uploadable;
}
//# sourceMappingURL=UploadVideoRequest.d.ts.map