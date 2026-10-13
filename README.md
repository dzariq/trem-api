# `@dzariq/trem-api`

Trem Admin API TypeScript SDK (Fern-generated).

**Repo:** https://github.com/dzariq/trem-api

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

From `fern-sdk/`:

```bash
# 1) regenerate from OpenAPI (optional)
fern generate --group local

# 2) bump + build + push tag
cd sdks/typescript
npm version 0.1.1 --no-git-tag-version
npm run build
git add -A && git commit -m "Release 0.1.1"
git tag v0.1.1
# push (see fern-sdk/README.md if SSH account mismatch)
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

Then clients use:

```ini
# .npmrc
@dzariq:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @dzariq/trem-api@0.1.1
```
