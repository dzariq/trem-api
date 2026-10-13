export interface AdminUserGroupDto {
    id: string;
    name: string;
    /** FCM topic slug (lowercase letters/digits only) */
    topic: string;
    /** Current member count (max 1000) */
    member_count: number;
    created_at: string;
    updated_at: string;
}
//# sourceMappingURL=AdminUserGroupDto.d.ts.map