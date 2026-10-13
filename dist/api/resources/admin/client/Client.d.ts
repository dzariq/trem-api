import type { BaseClientOptions, BaseRequestOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth } from "../../../../BaseClient.js";
import * as core from "../../../../core/index.js";
import * as TremApi from "../../../index.js";
export declare namespace AdminClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AdminClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<AdminClient.Options>;
    constructor(options?: AdminClient.Options);
    /**
     * @param {TremApi.ListRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.list({
     *         page: 1,
     *         per_page: 30
     *     })
     */
    list(request?: TremApi.ListRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminShowFinalWeekListResponseDto>;
    private __list;
    /**
     * @param {TremApi.AdminCreateFcmTopicTypeDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.ConflictError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.create({
     *         topic: "ticket-price-drop"
     *     })
     */
    create(request: TremApi.AdminCreateFcmTopicTypeDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTopicTypeResponseDto>;
    private __create;
    /**
     * @param {TremApi.RemoveRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.remove({
     *         id: "id"
     *     })
     */
    remove(request: TremApi.RemoveRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminDeleteFcmTopicTypeResponseDto>;
    private __remove;
    /**
     * @param {TremApi.AdminUpdateFcmTopicTypeDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link TremApi.ConflictError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.update({
     *         id: "id"
     *     })
     */
    update(request: TremApi.AdminUpdateFcmTopicTypeDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTopicTypeResponseDto>;
    private __update;
    /**
     * Executes the job request_path once and updates last_run_* fields.
     *
     * @param {TremApi.RunNowRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.runNow({
     *         id: "id"
     *     })
     */
    runNow(request: TremApi.RunNowRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminCronJobRunResponseDto>;
    private __runNow;
    /**
     * Returns JWT access token and opaque refresh token. Access token includes role `admin`.
     *
     * @param {TremApi.LoginDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.login({
     *         email: "user@example.com",
     *         password: "your-password"
     *     })
     */
    login(request: TremApi.LoginDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminLoginResponseDto>;
    private __login;
    /**
     * Always returns success. If the email belongs to an admin, a one-time reset link is queued and sent. The link uses config `admin_password_reset_base_url` (or env ADMIN_PASSWORD_RESET_BASE_URL) with `reset_token`. Complete with POST /admin/auth/reset-password.
     *
     * @param {TremApi.ForgotPasswordDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.forgotPassword({
     *         email: "user@example.com"
     *     })
     */
    forgotPassword(request: TremApi.ForgotPasswordDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AuthMessageResponseDto>;
    private __forgotPassword;
    /**
     * Consumes a one-time reset token from the forgot-password email. Returns new access and refresh tokens. Other admin sessions are signed out.
     *
     * @param {TremApi.ResetPasswordDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.resetPassword({
     *         token: "k7nQ2vR9pLwX\u2026",
     *         password: "securePass1"
     *     })
     */
    resetPassword(request: TremApi.ResetPasswordDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminLoginResponseDto>;
    private __resetPassword;
    /**
     * Returns new access_token and refresh_token; old refresh token is invalidated.
     *
     * @param {TremApi.RefreshDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.refresh({
     *         refresh_token: "refresh_token"
     *     })
     */
    refresh(request: TremApi.RefreshDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminRefreshResponseDto>;
    private __refresh;
    /**
     * Pass the refresh_token to revoke that session.
     *
     * @param {TremApi.LogoutDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.logout({
     *         refresh_token: "refresh_token"
     *     })
     */
    logout(request: TremApi.LogoutDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminLogoutResponseDto>;
    private __logout;
    /**
     * Distinct ISO currency codes found on show pricing (tier/row/seat prices, categories, bands, add-ons).
     *
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listCurrencies()
     */
    listCurrencies(requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listCurrencies;
    /**
     * @param {TremApi.GetRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.get({
     *         id: "id"
     *     })
     */
    get(request: TremApi.GetRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTopicTypeResponseDto>;
    private __get;
    /**
     * Get-or-create `Shows / {showName} ({shortId})` in the asset manager and return the directory.
     *
     * @param {TremApi.EnsureAssetDirectoryRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.ensureAssetDirectory({
     *         showId: "showId"
     *     })
     */
    ensureAssetDirectory(request: TremApi.EnsureAssetDirectoryRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __ensureAssetDirectory;
    /**
     * Copies performance sessions and venue seating prices (section/row/seat + bands) from this show onto selected target shows. Existing pricing on targets is overwritten. Sessions are synced by date+time; extra target sessions without bookings are removed. Targets must share the same venue (or have no venue — then the source venue is assigned).
     *
     * @param {TremApi.AdminApplyShowSetupDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.applySetup({
     *         showId: "showId",
     *         target_show_ids: ["11111111-1111-1111-1111-111111111111"]
     *     })
     */
    applySetup(request: TremApi.AdminApplyShowSetupDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __applySetup;
    /**
     * Partial-update many shows in one request (name, city, dates, venue, status, preview_mode, loyalty). Per-item errors are returned without aborting the whole batch.
     *
     * @param {TremApi.AdminBulkUpdateShowsDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.bulkUpdate({
     *         items: [{
     *                 id: "id"
     *             }]
     *     })
     */
    bulkUpdate(request: TremApi.AdminBulkUpdateShowsDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __bulkUpdate;
    /**
     * Multipart upload (field name: image). Max: SURVEY_IMAGE_MAX_BYTES (default 1MB). jpg/png/svg.
     *
     * @param {TremApi.UploadImageRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.admin.uploadImage({
     *         image: fs.createReadStream("/path/to/your/file"),
     *         surveyId: "surveyId"
     *     })
     */
    uploadImage(request: TremApi.UploadImageRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __uploadImage;
    /**
     * @param {TremApi.GetSummaryRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getSummary({
     *         userId: "userId"
     *     })
     */
    getSummary(request: TremApi.GetSummaryRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getSummary;
    /**
     * @param {TremApi.AdminAdjustLoyaltyPointsDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.adjust({
     *         userId: "userId",
     *         points_delta: 100
     *     })
     */
    adjust(request: TremApi.AdminAdjustLoyaltyPointsDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __adjust;
    /**
     * Returns a short-lived user access token so CMS can call public APIs (shows, checkout) as the selected buyer.
     *
     * @param {TremApi.IssueSimulationAccessTokenRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.issueSimulationAccessToken({
     *         userId: "userId"
     *     })
     */
    issueSimulationAccessToken(request: TremApi.IssueSimulationAccessTokenRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __issueSimulationAccessToken;
    /**
     * Returns assigned tier and complimentary ticket balance, or null if none. Mirrors public GET /api/users/me/membership for the given year.
     *
     * @param {TremApi.GetMembershipRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getMembership({
     *         userId: "userId"
     *     })
     */
    getMembership(request: TremApi.GetMembershipRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminUserMembershipResponseDto>;
    private __getMembership;
    /**
     * Upserts membership for user + year (default: current calendar year).
     *
     * @param {TremApi.AdminUpsertUserMembershipDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.upsertMembership({
     *         userId: "userId",
     *         tier_id: "tier_id"
     *     })
     */
    upsertMembership(request: TremApi.AdminUpsertUserMembershipDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminUserMembershipResponseDto>;
    private __upsertMembership;
    /**
     * @param {TremApi.RemoveMembershipRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.removeMembership({
     *         userId: "userId"
     *     })
     */
    removeMembership(request: TremApi.RemoveMembershipRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminDeleteUserMembershipResponseDto>;
    private __removeMembership;
    /**
     * Returns show_saved rows and show_notification preferences for the given user.
     *
     * @param {TremApi.PreferencesRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.preferences({
     *         userId: "userId"
     *     })
     */
    preferences(request: TremApi.PreferencesRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __preferences;
    /**
     * @param {TremApi.UploadReactionVideoRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.admin.uploadReactionVideo({
     *         video: fs.createReadStream("/path/to/your/file"),
     *         showId: "showId"
     *     })
     */
    uploadReactionVideo(request: TremApi.UploadReactionVideoRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminVideoReactionUploadResponseDto>;
    private __uploadReactionVideo;
    /**
     * Scans a ticket QR (validate URL or TRM:v1 token), returns booking/customer/seat details, and marks the ticket as used (attended). If already used, returns already_attended with message "Customer already attended".
     *
     * @param {TremApi.AdminTicketCheckInDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.checkIn({
     *         code: "https://tremstgapi.axcova.com/api/tickets/validate?code=TRM%3Av1%3A00000042%3A22222222-2222-2222-2222-222222222222"
     *     })
     */
    checkIn(request: TremApi.AdminTicketCheckInDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __checkIn;
    /**
     * JSON alternative to GET /api/checkout/return for CMS purchase simulation. Fulfills tickets on success.
     *
     * @param {TremApi.AdminCompleteSandboxPaymentDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link TremApi.ConflictError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.completeSandboxPayment({
     *         payment_id: "payment_id",
     *         result: "success"
     *     })
     */
    completeSandboxPayment(request: TremApi.AdminCompleteSandboxPaymentDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.CheckoutCompleteResponseDto>;
    private __completeSandboxPayment;
    /**
     * Full payment detail including customer, show/session choice, line items, reserved seats, Stripe fields, payment attempts, and issued e-tickets with `qr_payload` (`TRM:v1:{ticketNumber}:{qrCode}`) when the checkout is paid.
     *
     * @param {TremApi.GetDetailRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getDetail({
     *         paymentId: "paymentId"
     *     })
     */
    getDetail(request: TremApi.GetDetailRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getDetail;
    /**
     * Multipart field `files` (multiple). Optional `directory_id`. Images become JPEG under asset_image_* configs; videos become H.264 MP4 under asset_video_* configs. Media Library root lists live OSS uploads.
     *
     * @param {TremApi.UploadRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.admin.upload({
     *         files: [fs.createReadStream("/path/to/your/file")]
     *     })
     */
    upload(request: TremApi.UploadRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __upload;
    /**
     * Deletes one record from shows_videos and attempts to remove the uploaded file (best-effort). Returns the full show object (same as GET /api/admin/shows/:showId) after deletion.
     *
     * @param {TremApi.DeleteRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.delete({
     *         showId: "showId",
     *         videoId: "videoId"
     *     })
     */
    delete(request: TremApi.DeleteRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.ShowCardResponseDto>;
    private __delete;
    /**
     * Updates the display title for one shows_videos row.
     *
     * @param {TremApi.AdminUpdateShowVideoDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.updateVideo({
     *         showId: "showId",
     *         videoId: "videoId",
     *         title: "Opening night highlight"
     *     })
     */
    updateVideo(request: TremApi.AdminUpdateShowVideoDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.ShowCardResponseDto>;
    private __updateVideo;
    /**
     * Marks the given shows_videos row as main (is_main=true) and clears any previous main video for the show.
     *
     * @param {TremApi.SetMainRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.setMain({
     *         showId: "showId",
     *         videoId: "videoId"
     *     })
     */
    setMain(request: TremApi.SetMainRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.ShowCardResponseDto>;
    private __setMain;
    /**
     * @param {TremApi.AdminLinkShowArticleDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.link({
     *         showId: "showId",
     *         article_id: "b7d1d1a0-1c35-4d2c-8d45-2b0bb6a4bb1a"
     *     })
     */
    link(request: TremApi.AdminLinkShowArticleDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __link;
    /**
     * @param {TremApi.UnlinkRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.unlink({
     *         showId: "showId",
     *         articleId: "articleId"
     *     })
     */
    unlink(request: TremApi.UnlinkRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __unlink;
    /**
     * Returns registered push tokens for the given app user UUID.
     *
     * @param {TremApi.ListTokensRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listTokens({
     *         user_id: "user_id"
     *     })
     */
    listTokens(request: TremApi.ListTokensRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTokenListResponseDto>;
    private __listTokens;
    /**
     * Associates an FCM registration token with an app user. For CMS/testing when the mobile app is not used.
     *
     * @param {TremApi.AdminRegisterFcmTokenDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.registerToken({
     *         user_id: "a439e524-3a8a-487a-b897-2c3a231a3fda",
     *         token: "token"
     *     })
     */
    registerToken(request: TremApi.AdminRegisterFcmTokenDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.RegisterFcmTokenResponseDto>;
    private __registerToken;
    /**
     * Removes a registration token for the given user.
     *
     * @param {TremApi.AdminUnregisterFcmTokenDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.unregisterToken({
     *         user_id: "a439e524-3a8a-487a-b897-2c3a231a3fda",
     *         token: "token"
     *     })
     */
    unregisterToken(request: TremApi.AdminUnregisterFcmTokenDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.UnregisterFcmTokenResponseDto>;
    private __unregisterToken;
    /**
     * Sends a push notification via FCM to all registered devices of the given user IDs. Returns per-token success/failure counts.
     *
     * @param {TremApi.AdminSendFcmDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.send({
     *         user_ids: ["def36a9f-6600-48d4-9922-be6b1a00c04c"],
     *         title: "New show added!",
     *         body: "Check out the latest show near you."
     *     })
     */
    send(request: TremApi.AdminSendFcmDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminSendFcmResponseDto>;
    private __send;
    /**
     * Delivers to every device subscribed to the FCM topic (mobile `subscribeToTopic`). Topic name must match the app subscription exactly (e.g. `xxx` for `event: xxx`).
     *
     * @param {TremApi.AdminSendFcmTopicDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.sendTopic({
     *         topic: "xxx",
     *         title: "Event alert",
     *         body: "Something happened for event xxx"
     *     })
     */
    sendTopic(request: TremApi.AdminSendFcmTopicDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminSendFcmTopicResponseDto>;
    private __sendTopic;
    /**
     * Server-side `subscribeToTopic` for tokens in DB and/or explicit token list. Mobile apps usually subscribe on-device; use this for CMS web testing.
     *
     * @param {TremApi.AdminSubscribeFcmTopicDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.subscribeTopic({
     *         topic: "xxx"
     *     })
     */
    subscribeTopic(request: TremApi.AdminSubscribeFcmTopicDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTopicSubscribeResponseDto>;
    private __subscribeTopic;
    /**
     * @param {TremApi.AdminUnsubscribeFcmTopicDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.BadRequestError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.unsubscribeTopic({
     *         topic: "xxx"
     *     })
     */
    unsubscribeTopic(request: TremApi.AdminUnsubscribeFcmTopicDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminFcmTopicSubscribeResponseDto>;
    private __unsubscribeTopic;
    /**
     * Multipart upload (field name: video). Max: SURVEY_VIDEO_MAX_BYTES (default 500MB). mp4/webm/quicktime.
     *
     * @param {TremApi.UploadVideoRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.admin.uploadVideo({
     *         video: fs.createReadStream("/path/to/your/file"),
     *         surveyId: "surveyId"
     *     })
     */
    uploadVideo(request: TremApi.UploadVideoRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __uploadVideo;
    /**
     * @param {TremApi.GetTreeRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getTree({
     *         venueId: "venueId"
     *     })
     */
    getTree(request: TremApi.GetTreeRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getTree;
    /**
     * @param {TremApi.ImportConfigRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.importConfig({
     *         venueId: "venueId"
     *     })
     */
    importConfig(request: TremApi.ImportConfigRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __importConfig;
    /**
     * Removes all sections, rows, seats, and tiers for this venue, clears the seat map SVG, and resets stored config JSON. Blocked when seats are sold or held, or when tickets/checkout orders still reference ticket categories for linked shows.
     *
     * @param {TremApi.ClearConfigRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.clearConfig({
     *         venueId: "venueId"
     *     })
     */
    clearConfig(request: TremApi.ClearConfigRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __clearConfig;
    /**
     * Deletes seat holds, tickets, checkout orders, and purchase records for shows linked to this venue (and tickets/holds on this venue’s seats). Use before re-importing seating when sold/held seats block the import.
     *
     * @param {TremApi.ClearBookingsRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.clearBookings({
     *         venueId: "venueId"
     *     })
     */
    clearBookings(request: TremApi.ClearBookingsRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __clearBookings;
    /**
     * Used by Live bookings to pick a show before selecting a session.
     *
     * @param {TremApi.ListShowsForVenueRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listShowsForVenue({
     *         venueId: "venueId"
     *     })
     */
    listShowsForVenue(request: TremApi.ListShowsForVenueRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listShowsForVenue;
    /**
     * Filter by date and/or show_id. When show_id is set without date, use GET …/shows/:showId/sessions instead for all sessions of that show.
     *
     * @param {TremApi.ListSessionsForDateRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listSessionsForDate({
     *         venueId: "venueId"
     *     })
     */
    listSessionsForDate(request: TremApi.ListSessionsForDateRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listSessionsForDate;
    /**
     * Returns sessions with sold/held counts for Live bookings search.
     *
     * @param {TremApi.ListSessionsForShowRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listSessionsForShow({
     *         venueId: "venueId",
     *         showId: "showId"
     *     })
     */
    listSessionsForShow(request: TremApi.ListSessionsForShowRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listSessionsForShow;
    /**
     * Seat-by-seat availability with ticket/hold booking details for the selected show session.
     *
     * @param {TremApi.GetOccupancyRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getOccupancy({
     *         venueId: "venueId",
     *         session_id: "session_id"
     *     })
     */
    getOccupancy(request: TremApi.GetOccupancyRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getOccupancy;
    /**
     * Makes an available seat unbookable until the requested expiry. Existing sold or actively held seats cannot be blocked.
     *
     * @param {TremApi.AdminBlockVenueSeatDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.blockSeat({
     *         venueId: "venueId",
     *         seatId: "seatId",
     *         session_id: "session_id"
     *     })
     */
    blockSeat(request: TremApi.AdminBlockVenueSeatDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __blockSeat;
    /**
     * @param {TremApi.UnblockSeatRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.unblockSeat({
     *         venueId: "venueId",
     *         seatId: "seatId",
     *         session_id: "session_id"
     *     })
     */
    unblockSeat(request: TremApi.UnblockSeatRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __unblockSeat;
    /**
     * Cancels an active ticket or removes the seat from an active hold for the given session.
     *
     * @param {TremApi.ClearSeatBookingRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.clearSeatBooking({
     *         venueId: "venueId",
     *         seatId: "seatId",
     *         session_id: "session_id"
     *     })
     */
    clearSeatBooking(request: TremApi.ClearSeatBookingRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __clearSeatBooking;
    /**
     * Creates a ticket linked to venue_seat_id for an available seat. Requires a matching ticket category for the seat tier on that session.
     *
     * @param {TremApi.AdminAssignVenueSeatDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.assignSeat({
     *         venueId: "venueId",
     *         seatId: "seatId",
     *         session_id: "session_id",
     *         user_id: "user_id"
     *     })
     */
    assignSeat(request: TremApi.AdminAssignVenueSeatDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __assignSeat;
    /**
     * @param {TremApi.UploadConfigRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.uploadConfig({
     *         venueId: "venueId"
     *     })
     */
    uploadConfig(request: TremApi.UploadConfigRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __uploadConfig;
    /**
     * @param {TremApi.GetSeatMapRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getSeatMap({
     *         venueId: "venueId"
     *     })
     */
    getSeatMap(request: TremApi.GetSeatMapRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getSeatMap;
    /**
     * @param {TremApi.UploadSeatMapRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.uploadSeatMap({
     *         venueId: "venueId"
     *     })
     */
    uploadSeatMap(request: TremApi.UploadSeatMapRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __uploadSeatMap;
    /**
     * @param {TremApi.UploadSectionImageRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.uploadSectionImage({
     *         venueId: "venueId",
     *         sectionKey: "sectionKey"
     *     })
     */
    uploadSectionImage(request: TremApi.UploadSectionImageRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __uploadSectionImage;
    /**
     * @param {TremApi.AdminUpsertVenueLayoutDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.upsertLayout({
     *         venueId: "venueId"
     *     })
     */
    upsertLayout(request: TremApi.AdminUpsertVenueLayoutDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __upsertLayout;
    /**
     * @param {TremApi.AdminCreateVenueSectionDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.createSection({
     *         venueId: "venueId",
     *         name: "Stalls Centre"
     *     })
     */
    createSection(request: TremApi.AdminCreateVenueSectionDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createSection;
    /**
     * @param {TremApi.DeleteSectionRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.deleteSection({
     *         sectionId: "sectionId"
     *     })
     */
    deleteSection(request: TremApi.DeleteSectionRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteSection;
    /**
     * @param {TremApi.AdminUpdateVenueSectionDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.updateSection({
     *         sectionId: "sectionId"
     *     })
     */
    updateSection(request: TremApi.AdminUpdateVenueSectionDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __updateSection;
    /**
     * @param {TremApi.AdminCreateVenueRowDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.createRow({
     *         sectionId: "sectionId",
     *         row_label: "FF"
     *     })
     */
    createRow(request: TremApi.AdminCreateVenueRowDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createRow;
    /**
     * @param {TremApi.DeleteRowRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.deleteRow({
     *         rowId: "rowId"
     *     })
     */
    deleteRow(request: TremApi.DeleteRowRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteRow;
    /**
     * @param {TremApi.AdminUpdateVenueRowDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.updateRow({
     *         rowId: "rowId"
     *     })
     */
    updateRow(request: TremApi.AdminUpdateVenueRowDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __updateRow;
    /**
     * @param {TremApi.AdminCreateVenueSeatsDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.createSeats({
     *         rowId: "rowId",
     *         seat_numbers: [19, 20, 21, 22, 23]
     *     })
     */
    createSeats(request: TremApi.AdminCreateVenueSeatsDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createSeats;
    /**
     * @param {TremApi.DeleteSeatRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.deleteSeat({
     *         seatId: "seatId"
     *     })
     */
    deleteSeat(request: TremApi.DeleteSeatRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteSeat;
    /**
     * @param {TremApi.AdminUpdateVenueSeatDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.updateSeat({
     *         seatId: "seatId"
     *     })
     */
    updateSeat(request: TremApi.AdminUpdateVenueSeatDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __updateSeat;
    /**
     * Returns tier prices plus seat map SVG. Pass optional `session_id` to load prices for one session (from ticket_categories).
     *
     * @param {TremApi.ListVenueTierPricesRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listVenueTierPrices({
     *         showId: "showId"
     *     })
     */
    listVenueTierPrices(request: TremApi.ListVenueTierPricesRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listVenueTierPrices;
    /**
     * Pass `session_id` to save prices for one session only. Omit `session_id` or set `apply_to_all_sessions: true` to update every session.
     *
     * @param {TremApi.AdminUpsertShowVenueTierPricesDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.upsertVenueTierPrices({
     *         showId: "showId"
     *     })
     */
    upsertVenueTierPrices(request: TremApi.AdminUpsertShowVenueTierPricesDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __upsertVenueTierPrices;
    /**
     * Returns venue-level default prices per section/row/seat plus the seat map SVG. Shows using this venue inherit these prices as defaults until they set their own.
     *
     * @param {TremApi.ListVenuePricesRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listVenuePrices({
     *         venueId: "venueId"
     *     })
     */
    listVenuePrices(request: TremApi.ListVenuePricesRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listVenuePrices;
    /**
     * Saves venue-level default prices. `seat_pricing_mode` picks the granularity (tier=section, row, or seat). These act as defaults for shows using this venue.
     *
     * @param {TremApi.AdminUpsertVenuePricesDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.upsertVenuePrices({
     *         venueId: "venueId",
     *         items: [{
     *                 venue_tier_id: "venue_tier_id",
     *                 price: 1.1
     *             }]
     *     })
     */
    upsertVenuePrices(request: TremApi.AdminUpsertVenuePricesDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __upsertVenuePrices;
    /**
     * Enqueues push for `user_ids`, all members of `user_group_id`, or a custom FCM `topic`. Per-user jobs send to the FCM topic named after each user UUID (`users.id`). Topic jobs send once to the given FCM topic. A cron worker delivers pending rows.
     *
     * @param {TremApi.AdminSendMessagePushDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.enqueuePush({
     *         title: "New show alert",
     *         body: "Tickets are on sale now."
     *     })
     */
    enqueuePush(request: TremApi.AdminSendMessagePushDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminSendMessageEnqueueResponseDto>;
    private __enqueuePush;
    /**
     * Enqueues one email per user (to their account email). Pass `user_ids` or `user_group_id`. Sent via Resend by the email queue worker.
     *
     * @param {TremApi.AdminSendMessageEmailDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.enqueueEmail({
     *         subject: "Weekly update",
     *         html_body: "<p>Hello from TREM</p>"
     *     })
     */
    enqueueEmail(request: TremApi.AdminSendMessageEmailDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminSendMessageEnqueueResponseDto>;
    private __enqueueEmail;
    /**
     * @param {TremApi.ListMembersRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listMembers({
     *         groupId: "groupId"
     *     })
     */
    listMembers(request: TremApi.ListMembersRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminUserGroupMembersListResponseDto>;
    private __listMembers;
    /**
     * Adds up to 1000 members total per group. Skips users already in the group.
     *
     * @param {TremApi.AdminUserGroupMembersDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.addMembers({
     *         groupId: "groupId",
     *         user_ids: ["cc800633-5e29-476f-bfc4-da3aa3e13c9a"]
     *     })
     */
    addMembers(request: TremApi.AdminUserGroupMembersDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminUserGroupMembersAddResponseDto>;
    private __addMembers;
    /**
     * @param {TremApi.RemoveMemberRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link TremApi.NotFoundError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.removeMember({
     *         groupId: "groupId",
     *         userId: "userId"
     *     })
     */
    removeMember(request: TremApi.RemoveMemberRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<TremApi.AdminUserGroupMemberRemoveResponseDto>;
    private __removeMember;
    /**
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.settings()
     */
    settings(requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __settings;
    /**
     * @param {TremApi.ListDirectoriesRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listDirectories()
     */
    listDirectories(request?: TremApi.ListDirectoriesRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listDirectories;
    /**
     * @param {TremApi.AdminCreateAssetDirectoryDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.createDirectory({
     *         name: "Campaigns"
     *     })
     */
    createDirectory(request: TremApi.AdminCreateAssetDirectoryDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __createDirectory;
    /**
     * @param {TremApi.DeleteDirectoryRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.deleteDirectory({
     *         directoryId: "directoryId"
     *     })
     */
    deleteDirectory(request: TremApi.DeleteDirectoryRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteDirectory;
    /**
     * @param {TremApi.AdminRenameAssetDirectoryDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.renameDirectory({
     *         directoryId: "directoryId",
     *         name: "Summer campaign"
     *     })
     */
    renameDirectory(request: TremApi.AdminRenameAssetDirectoryDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __renameDirectory;
    /**
     * @param {TremApi.ListAssetsRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.listAssets()
     */
    listAssets(request?: TremApi.ListAssetsRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __listAssets;
    /**
     * Used by CMS when inserting an existing library item into a form. Avoids browser CORS on direct S3 URLs.
     *
     * @param {TremApi.GetContentRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.getContent({
     *         assetId: "assetId"
     *     })
     */
    getContent(request: TremApi.GetContentRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __getContent;
    /**
     * @param {TremApi.DeleteAssetRequest} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.deleteAsset({
     *         assetId: "assetId"
     *     })
     */
    deleteAsset(request: TremApi.DeleteAssetRequest, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __deleteAsset;
    /**
     * @param {TremApi.AdminUpdateAssetDto} request
     * @param {AdminClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link TremApi.UnauthorizedError}
     * @throws {@link errors.TremApiError}
     * @throws {@link errors.TremApiTimeoutError}
     *
     * @example
     *     await client.admin.updateAsset({
     *         assetId: "assetId"
     *     })
     */
    updateAsset(request: TremApi.AdminUpdateAssetDto, requestOptions?: AdminClient.RequestOptions): core.HttpResponsePromise<void>;
    private __updateAsset;
}
//# sourceMappingURL=Client.d.ts.map