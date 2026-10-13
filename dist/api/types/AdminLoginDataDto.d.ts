import type * as TremApi from "../index.js";
export interface AdminLoginDataDto {
    /** JWT access token (role=admin) */
    access_token: string;
    /** Opaque refresh token */
    refresh_token: string;
    admin: TremApi.AdminInfoDto;
}
//# sourceMappingURL=AdminLoginDataDto.d.ts.map