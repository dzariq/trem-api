# `@dzariq/trem-api`

Trem Admin API TypeScript SDK (Fern-generated).

**Repo:** https://github.com/dzariq/trem-api  
**Changelog:** [CHANGELOG.md](./CHANGELOG.md) · [GitHub Releases](https://github.com/dzariq/trem-api/releases)

## Install (client apps)

```bash
npm install github:dzariq/trem-api#v0.1.0
```

```ts
import { TremApiClient } from "@dzariq/trem-api";

const client = new TremApiClient({
  baseUrl: "https://tremstgapi.axcova.com",
  token: process.env.TREM_ADMIN_TOKEN,
});

await client.admin.login({ email, password });
```

## Publish a new version

1. Update OpenAPI / regenerate (`fern generate --group local`) if needed  
2. Edit **`CHANGELOG.md`**: move notes from `[Unreleased]` into `## [x.y.z] - YYYY-MM-DD`  
3. From `fern-sdk/`:

```bash
./scripts/release-sdk.sh 0.1.1
```

That bumps `package.json`, builds `dist/`, commits, tags `v0.1.1`, pushes, and creates a **GitHub Release** from the changelog section.

Dry-run notes only:

```bash
./scripts/release-sdk.sh 0.1.1 --notes-only
```

Local tag without push:

```bash
./scripts/release-sdk.sh 0.1.1 --no-push
```

Clients then bump:

```bash
npm install github:dzariq/trem-api#v0.1.1
```

### Optional: GitHub Packages

Needs a token with `write:packages`:

```bash
gh auth refresh -h github.com -s write:packages,workflow
./scripts/publish-sdk.sh 0.1.1
```
