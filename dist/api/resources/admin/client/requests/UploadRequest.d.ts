import type * as core from "../../../../../core/index.js";
/**
 * @example
 *     {
 *         files: [fs.createReadStream("/path/to/your/file")]
 *     }
 */
export interface UploadRequest {
    directory_id?: string | null;
    files: core.file.Uploadable[];
}
//# sourceMappingURL=UploadRequest.d.ts.map