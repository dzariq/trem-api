export interface AdminUserDto {
    id: string;
    email: string;
    password_hash?: Record<string, unknown> | undefined;
    name: string;
    city?: Record<string, unknown> | undefined;
    /** City UUID (FK to cities.id) */
    city_id?: Record<string, unknown> | undefined;
    /** Category ids */
    categories: string[];
    auth_provider: AdminUserDto.AuthProvider;
    provider_subject?: Record<string, unknown> | undefined;
    created_at: string;
    updated_at: string;
}
export declare namespace AdminUserDto {
    const AuthProvider: {
        readonly Email: "email";
        readonly Google: "google";
        readonly Apple: "apple";
    };
    type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
}
//# sourceMappingURL=AdminUserDto.d.ts.map