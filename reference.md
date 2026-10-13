# Reference
## Admin
<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">list</a>({ ...params }) -> TremApi.AdminShowFinalWeekListResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.list({
    page: 1,
    per_page: 30
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">create</a>({ ...params }) -> TremApi.AdminFcmTopicTypeResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.create({
    topic: "ticket-price-drop"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCreateFcmTopicTypeDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">remove</a>({ ...params }) -> TremApi.AdminDeleteFcmTopicTypeResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.remove({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.RemoveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">update</a>({ ...params }) -> TremApi.AdminFcmTopicTypeResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.update({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateFcmTopicTypeDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">runNow</a>({ ...params }) -> TremApi.AdminCronJobRunResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Executes the job request_path once and updates last_run_* fields.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.runNow({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.RunNowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">login</a>({ ...params }) -> TremApi.AdminLoginResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns JWT access token and opaque refresh token. Access token includes role `admin`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.login({
    email: "user@example.com",
    password: "your-password"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.LoginDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">forgotPassword</a>({ ...params }) -> TremApi.AuthMessageResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Always returns success. If the email belongs to an admin, a one-time reset link is queued and sent. The link uses config `admin_password_reset_base_url` (or env ADMIN_PASSWORD_RESET_BASE_URL) with `reset_token`. Complete with POST /admin/auth/reset-password.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.forgotPassword({
    email: "user@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ForgotPasswordDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">resetPassword</a>({ ...params }) -> TremApi.AdminLoginResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Consumes a one-time reset token from the forgot-password email. Returns new access and refresh tokens. Other admin sessions are signed out.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.resetPassword({
    token: "k7nQ2vR9pLwX\u2026",
    password: "securePass1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ResetPasswordDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">refresh</a>({ ...params }) -> TremApi.AdminRefreshResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns new access_token and refresh_token; old refresh token is invalidated.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.refresh({
    refresh_token: "refresh_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.RefreshDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">logout</a>({ ...params }) -> TremApi.AdminLogoutResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pass the refresh_token to revoke that session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.logout({
    refresh_token: "refresh_token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.LogoutDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listCurrencies</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Distinct ISO currency codes found on show pricing (tier/row/seat prices, categories, bands, add-ons).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listCurrencies();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">get</a>({ ...params }) -> TremApi.AdminFcmTopicTypeResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.get({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">ensureAssetDirectory</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get-or-create `Shows / {showName} ({shortId})` in the asset manager and return the directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.ensureAssetDirectory({
    showId: "showId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.EnsureAssetDirectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">applySetup</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Copies performance sessions and venue seating prices (section/row/seat + bands) from this show onto selected target shows. Existing pricing on targets is overwritten. Sessions are synced by date+time; extra target sessions without bookings are removed. Targets must share the same venue (or have no venue — then the source venue is assigned).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.applySetup({
    showId: "showId",
    target_show_ids: ["11111111-1111-1111-1111-111111111111"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminApplyShowSetupDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">bulkUpdate</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Partial-update many shows in one request (name, city, dates, venue, status, preview_mode, loyalty). Per-item errors are returned without aborting the whole batch.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.bulkUpdate({
    items: [{
            id: "id"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminBulkUpdateShowsDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadImage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Multipart upload (field name: image). Max: SURVEY_IMAGE_MAX_BYTES (default 1MB). jpg/png/svg.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadImage({
    image: fs.createReadStream("/path/to/your/file"),
    surveyId: "surveyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadImageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getSummary</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getSummary({
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetSummaryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">adjust</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.adjust({
    userId: "userId",
    points_delta: 100
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminAdjustLoyaltyPointsDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">issueSimulationAccessToken</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a short-lived user access token so CMS can call public APIs (shows, checkout) as the selected buyer.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.issueSimulationAccessToken({
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.IssueSimulationAccessTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getMembership</a>({ ...params }) -> TremApi.AdminUserMembershipResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns assigned tier and complimentary ticket balance, or null if none. Mirrors public GET /api/users/me/membership for the given year.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getMembership({
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetMembershipRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">upsertMembership</a>({ ...params }) -> TremApi.AdminUserMembershipResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upserts membership for user + year (default: current calendar year).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.upsertMembership({
    userId: "userId",
    tier_id: "tier_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpsertUserMembershipDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">removeMembership</a>({ ...params }) -> TremApi.AdminDeleteUserMembershipResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.removeMembership({
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.RemoveMembershipRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">preferences</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns show_saved rows and show_notification preferences for the given user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.preferences({
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.PreferencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadReactionVideo</a>({ ...params }) -> TremApi.AdminVideoReactionUploadResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadReactionVideo({
    video: fs.createReadStream("/path/to/your/file"),
    showId: "showId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadReactionVideoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">checkIn</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Scans a ticket QR (validate URL or TRM:v1 token), returns booking/customer/seat details, and marks the ticket as used (attended). If already used, returns already_attended with message "Customer already attended".
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.checkIn({
    code: "https://tremstgapi.axcova.com/api/tickets/validate?code=TRM%3Av1%3A00000042%3A22222222-2222-2222-2222-222222222222"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminTicketCheckInDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">completeSandboxPayment</a>({ ...params }) -> TremApi.CheckoutCompleteResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

JSON alternative to GET /api/checkout/return for CMS purchase simulation. Fulfills tickets on success.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.completeSandboxPayment({
    payment_id: "payment_id",
    result: "success"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCompleteSandboxPaymentDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getDetail</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Full payment detail including customer, show/session choice, line items, reserved seats, Stripe fields, payment attempts, and issued e-tickets with `qr_payload` (`TRM:v1:{ticketNumber}:{qrCode}`) when the checkout is paid.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getDetail({
    paymentId: "paymentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetDetailRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">upload</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Multipart field `files` (multiple). Optional `directory_id`. Images become JPEG under asset_image_* configs; videos become H.264 MP4 under asset_video_* configs. Media Library root lists live OSS uploads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.upload({
    files: [fs.createReadStream("/path/to/your/file")]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">delete</a>({ ...params }) -> TremApi.ShowCardResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes one record from shows_videos and attempts to remove the uploaded file (best-effort). Returns the full show object (same as GET /api/admin/shows/:showId) after deletion.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.delete({
    showId: "showId",
    videoId: "videoId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">updateVideo</a>({ ...params }) -> TremApi.ShowCardResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the display title for one shows_videos row.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.updateVideo({
    showId: "showId",
    videoId: "videoId",
    title: "Opening night highlight"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateShowVideoDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">setMain</a>({ ...params }) -> TremApi.ShowCardResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks the given shows_videos row as main (is_main=true) and clears any previous main video for the show.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.setMain({
    showId: "showId",
    videoId: "videoId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.SetMainRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">link</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.link({
    showId: "showId",
    article_id: "b7d1d1a0-1c35-4d2c-8d45-2b0bb6a4bb1a"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminLinkShowArticleDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">unlink</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.unlink({
    showId: "showId",
    articleId: "articleId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UnlinkRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listTokens</a>({ ...params }) -> TremApi.AdminFcmTokenListResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns registered push tokens for the given app user UUID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listTokens({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">registerToken</a>({ ...params }) -> TremApi.RegisterFcmTokenResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Associates an FCM registration token with an app user. For CMS/testing when the mobile app is not used.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.registerToken({
    user_id: "a439e524-3a8a-487a-b897-2c3a231a3fda",
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminRegisterFcmTokenDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">unregisterToken</a>({ ...params }) -> TremApi.UnregisterFcmTokenResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a registration token for the given user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.unregisterToken({
    user_id: "a439e524-3a8a-487a-b897-2c3a231a3fda",
    token: "token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUnregisterFcmTokenDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">send</a>({ ...params }) -> TremApi.AdminSendFcmResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a push notification via FCM to all registered devices of the given user IDs. Returns per-token success/failure counts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.send({
    user_ids: ["def36a9f-6600-48d4-9922-be6b1a00c04c"],
    title: "New show added!",
    body: "Check out the latest show near you."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminSendFcmDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">sendTopic</a>({ ...params }) -> TremApi.AdminSendFcmTopicResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delivers to every device subscribed to the FCM topic (mobile `subscribeToTopic`). Topic name must match the app subscription exactly (e.g. `xxx` for `event: xxx`).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.sendTopic({
    topic: "xxx",
    title: "Event alert",
    body: "Something happened for event xxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminSendFcmTopicDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">subscribeTopic</a>({ ...params }) -> TremApi.AdminFcmTopicSubscribeResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Server-side `subscribeToTopic` for tokens in DB and/or explicit token list. Mobile apps usually subscribe on-device; use this for CMS web testing.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.subscribeTopic({
    topic: "xxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminSubscribeFcmTopicDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">unsubscribeTopic</a>({ ...params }) -> TremApi.AdminFcmTopicSubscribeResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.unsubscribeTopic({
    topic: "xxx"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUnsubscribeFcmTopicDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadVideo</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Multipart upload (field name: video). Max: SURVEY_VIDEO_MAX_BYTES (default 500MB). mp4/webm/quicktime.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadVideo({
    video: fs.createReadStream("/path/to/your/file"),
    surveyId: "surveyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadVideoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getTree</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getTree({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetTreeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">importConfig</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.importConfig({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ImportConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">clearConfig</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes all sections, rows, seats, and tiers for this venue, clears the seat map SVG, and resets stored config JSON. Blocked when seats are sold or held, or when tickets/checkout orders still reference ticket categories for linked shows.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.clearConfig({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ClearConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">clearBookings</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes seat holds, tickets, checkout orders, and purchase records for shows linked to this venue (and tickets/holds on this venue’s seats). Use before re-importing seating when sold/held seats block the import.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.clearBookings({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ClearBookingsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listShowsForVenue</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used by Live bookings to pick a show before selecting a session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listShowsForVenue({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListShowsForVenueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listSessionsForDate</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Filter by date and/or show_id. When show_id is set without date, use GET …/shows/:showId/sessions instead for all sessions of that show.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listSessionsForDate({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListSessionsForDateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listSessionsForShow</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns sessions with sold/held counts for Live bookings search.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listSessionsForShow({
    venueId: "venueId",
    showId: "showId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListSessionsForShowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getOccupancy</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Seat-by-seat availability with ticket/hold booking details for the selected show session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getOccupancy({
    venueId: "venueId",
    session_id: "session_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetOccupancyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">blockSeat</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Makes an available seat unbookable until the requested expiry. Existing sold or actively held seats cannot be blocked.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.blockSeat({
    venueId: "venueId",
    seatId: "seatId",
    session_id: "session_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminBlockVenueSeatDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">unblockSeat</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.unblockSeat({
    venueId: "venueId",
    seatId: "seatId",
    session_id: "session_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UnblockSeatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">clearSeatBooking</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels an active ticket or removes the seat from an active hold for the given session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.clearSeatBooking({
    venueId: "venueId",
    seatId: "seatId",
    session_id: "session_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ClearSeatBookingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">assignSeat</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a ticket linked to venue_seat_id for an available seat. Requires a matching ticket category for the seat tier on that session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.assignSeat({
    venueId: "venueId",
    seatId: "seatId",
    session_id: "session_id",
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminAssignVenueSeatDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadConfig</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadConfig({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadConfigRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getSeatMap</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getSeatMap({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetSeatMapRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadSeatMap</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadSeatMap({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadSeatMapRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">uploadSectionImage</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.uploadSectionImage({
    venueId: "venueId",
    sectionKey: "sectionKey"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.UploadSectionImageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">upsertLayout</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.upsertLayout({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpsertVenueLayoutDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">createSection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.createSection({
    venueId: "venueId",
    name: "Stalls Centre"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCreateVenueSectionDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">deleteSection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.deleteSection({
    sectionId: "sectionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteSectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">updateSection</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.updateSection({
    sectionId: "sectionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateVenueSectionDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">createRow</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.createRow({
    sectionId: "sectionId",
    row_label: "FF"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCreateVenueRowDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">deleteRow</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.deleteRow({
    rowId: "rowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteRowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">updateRow</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.updateRow({
    rowId: "rowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateVenueRowDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">createSeats</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.createSeats({
    rowId: "rowId",
    seat_numbers: [19, 20, 21, 22, 23]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCreateVenueSeatsDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">deleteSeat</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.deleteSeat({
    seatId: "seatId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteSeatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">updateSeat</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.updateSeat({
    seatId: "seatId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateVenueSeatDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listVenueTierPrices</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns tier prices plus seat map SVG. Pass optional `session_id` to load prices for one session (from ticket_categories).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listVenueTierPrices({
    showId: "showId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListVenueTierPricesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">upsertVenueTierPrices</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pass `session_id` to save prices for one session only. Omit `session_id` or set `apply_to_all_sessions: true` to update every session.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.upsertVenueTierPrices({
    showId: "showId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpsertShowVenueTierPricesDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listVenuePrices</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns venue-level default prices per section/row/seat plus the seat map SVG. Shows using this venue inherit these prices as defaults until they set their own.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listVenuePrices({
    venueId: "venueId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListVenuePricesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">upsertVenuePrices</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Saves venue-level default prices. `seat_pricing_mode` picks the granularity (tier=section, row, or seat). These act as defaults for shows using this venue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.upsertVenuePrices({
    venueId: "venueId",
    items: [{
            venue_tier_id: "venue_tier_id",
            price: 1.1
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpsertVenuePricesDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">enqueuePush</a>({ ...params }) -> TremApi.AdminSendMessageEnqueueResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues push for `user_ids`, all members of `user_group_id`, or a custom FCM `topic`. Per-user jobs send to the FCM topic named after each user UUID (`users.id`). Topic jobs send once to the given FCM topic. A cron worker delivers pending rows.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.enqueuePush({
    title: "New show alert",
    body: "Tickets are on sale now."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminSendMessagePushDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">enqueueEmail</a>({ ...params }) -> TremApi.AdminSendMessageEnqueueResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues one email per user (to their account email). Pass `user_ids` or `user_group_id`. Sent via Resend by the email queue worker.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.enqueueEmail({
    subject: "Weekly update",
    html_body: "<p>Hello from TREM</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminSendMessageEmailDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listMembers</a>({ ...params }) -> TremApi.AdminUserGroupMembersListResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listMembers({
    groupId: "groupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">addMembers</a>({ ...params }) -> TremApi.AdminUserGroupMembersAddResponseDto</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds up to 1000 members total per group. Skips users already in the group.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.addMembers({
    groupId: "groupId",
    user_ids: ["cc800633-5e29-476f-bfc4-da3aa3e13c9a"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUserGroupMembersDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">removeMember</a>({ ...params }) -> TremApi.AdminUserGroupMemberRemoveResponseDto</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.removeMember({
    groupId: "groupId",
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.RemoveMemberRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">settings</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.settings();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listDirectories</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listDirectories();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListDirectoriesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">createDirectory</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.createDirectory({
    name: "Campaigns"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminCreateAssetDirectoryDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">deleteDirectory</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.deleteDirectory({
    directoryId: "directoryId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteDirectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">renameDirectory</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.renameDirectory({
    directoryId: "directoryId",
    name: "Summer campaign"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminRenameAssetDirectoryDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">listAssets</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.listAssets();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.ListAssetsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">getContent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used by CMS when inserting an existing library item into a form. Avoids browser CORS on direct S3 URLs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.getContent({
    assetId: "assetId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.GetContentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">deleteAsset</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.deleteAsset({
    assetId: "assetId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.DeleteAssetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admin.<a href="/src/api/resources/admin/client/Client.ts">updateAsset</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admin.updateAsset({
    assetId: "assetId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TremApi.AdminUpdateAssetDto` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

