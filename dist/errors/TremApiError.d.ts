import type * as core from "../core/index.js";
export declare class TremApiError extends Error {
    readonly statusCode?: number;
    readonly body?: unknown;
    readonly rawResponse?: core.RawResponse;
    readonly cause?: unknown;
    constructor({ message, statusCode, body, rawResponse, cause, }: {
        message?: string;
        statusCode?: number;
        body?: unknown;
        rawResponse?: core.RawResponse;
        cause?: unknown;
    });
    get requestId(): string | undefined;
}
//# sourceMappingURL=TremApiError.d.ts.map