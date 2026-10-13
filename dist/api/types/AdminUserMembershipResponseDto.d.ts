import type * as TremApi from "../index.js";
export interface AdminUserMembershipResponseDto {
    success: boolean;
    timestamp: string;
    /** Null when user has no membership for the requested year */
    data: TremApi.AdminUserMembershipDto | null;
}
//# sourceMappingURL=AdminUserMembershipResponseDto.d.ts.map