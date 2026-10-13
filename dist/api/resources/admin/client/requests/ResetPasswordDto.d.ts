/**
 * @example
 *     {
 *         token: "k7nQ2vR9pLwX\u2026",
 *         password: "securePass1"
 *     }
 */
export interface ResetPasswordDto {
    /** Raw token from the reset email link (query param `token`) */
    token: string;
    /** New password, at least 8 characters */
    password: string;
}
//# sourceMappingURL=ResetPasswordDto.d.ts.map