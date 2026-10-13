# Changelog

All notable changes to **`@dzariq/trem-api`** (Trem Admin API TypeScript SDK) are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).  
Versioning follows [SemVer](https://semver.org/): **MAJOR** = breaking API/SDK, **MINOR** = additive, **PATCH** = fix/docs only.

How to fill an entry when releasing:

1. Diff OpenAPI (optional): `npx oasdiff changelog previous.json openapi-admin.json`
2. Add a `## [x.y.z] - YYYY-MM-DD` section **above** the previous release
3. Use headings: `### Added` · `### Changed` · `### Deprecated` · `### Removed` · `### Fixed` · `### Breaking`
4. Run `../scripts/release-sdk.sh x.y.z` from `fern-sdk/`

---

## [Unreleased]

<!-- Move items into a versioned section when you cut a release. -->

### Added

### Changed

### Breaking

### Fixed

---

## [0.1.0] - 2026-10-13

### Added

- Initial Fern-generated TypeScript client for Trem Admin API (stg OpenAPI snapshot)
- `TremApiClient` with Bearer auth (`token`) and `auth: false` for login
- `client.admin.login` / admin resource methods from OpenAPI
- `client.fetch` passthrough for endpoints missing from codegen (e.g. duplicate `operationId`s)
- Default environment `TremApiEnvironment.Default` → `https://tremstgapi.axcova.com`
- Hosted install via `github:dzariq/trem-api#v0.1.0`

### Notes

- Prefer `new URL(path, baseUrl)` + `searchParams` when using `client.fetch` with query strings (relative paths that include `?` are joined incorrectly by the Fern URL helper)
- List-shows has no dedicated generated method yet; use `client.fetch` against `GET /api/admin/shows`
