/**
 * @example
 *     {
 *         payment_id: "payment_id",
 *         result: "success"
 *     }
 */
export interface AdminCompleteSandboxPaymentDto {
    /** Payment UUID from POST /api/checkout */
    payment_id: string;
    result: AdminCompleteSandboxPaymentDto.Result;
}
export declare namespace AdminCompleteSandboxPaymentDto {
    const Result: {
        readonly Success: "success";
        readonly Failed: "failed";
    };
    type Result = (typeof Result)[keyof typeof Result];
}
//# sourceMappingURL=AdminCompleteSandboxPaymentDto.d.ts.map