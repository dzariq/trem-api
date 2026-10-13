import type * as core from "../../../../../core/index.js";
/**
 * @example
 *     {
 *         image: fs.createReadStream("/path/to/your/file"),
 *         surveyId: "surveyId"
 *     }
 */
export interface UploadImageRequest {
    /** Survey UUID */
    surveyId: string;
    image: core.file.Uploadable;
}
//# sourceMappingURL=UploadImageRequest.d.ts.map