export interface CheckoutCompleteDataDto {
    checkout_id: string;
    payment_id: string;
    status: CheckoutCompleteDataDto.Status;
    purchase_record_id?: (Record<string, unknown> | null) | undefined;
    /** Client return_url with checkout_id, payment_id, status query params */
    redirect_url: string;
    /** After failure, seats held until this time for retry */
    payment_retry_until?: (string | null) | undefined;
    /** True when POST /checkout/retry is available */
    retry_available: boolean;
    guest_email?: (Record<string, unknown> | null) | undefined;
}
export declare namespace CheckoutCompleteDataDto {
    const Status: {
        readonly Paid: "paid";
        readonly Failed: "failed";
    };
    type Status = (typeof Status)[keyof typeof Status];
}
//# sourceMappingURL=CheckoutCompleteDataDto.d.ts.map