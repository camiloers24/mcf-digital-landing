# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via next lint
```

No test suite is configured. Type-check with:
```bash
npx tsc --noEmit
```

## Architecture

**Stack:** Next.js 14 App Router · React 18 · TypeScript (strict) · no CSS-in-JS (global CSS only in `app/globals.css`).

### Lead capture flow

Every PDF download triggers a modal gate:
1. `DownloadButton` calls `useLead().open({ slug, label })` from `LeadContext`
2. `LeadProvider` (in `app/layout.tsx`) renders `LeadModal` dynamically (SSR-off)
3. `LeadModal` POSTs to `/api/lead` (Monday.com GraphQL) then redirects to `/thanks`

### Content system (`lib/content.ts`)

Markdown files under `content/<type>/` are loaded at build time with `gray-matter`. Six content types: `glossary`, `operator-guides`, `pillar-guides`, `white-papers`, `case-studies`, `blog`. Files prefixed with `_` are drafts and excluded. All files must include required frontmatter: `title`, `description`, `slug`, `author` (name + title + linkedinUrl), `publishedDate`, `keywords`.

### Structured data (`lib/schema.ts`)

Typed helpers return JSON-LD objects for `<JsonLd data={…} />`. Use `serviceSchema` on audience pages, `articleSchema` on content pages, `faqPageSchema` on service pages (it auto-strips HTML from answers), `breadcrumbSchema` for guides, `videoObjectSchema` for the hero.

### Page structure

- Audience pages: `/flare-site-operators`, `/low-netback`, `/for-bitcoin-miners`, `/hnwi-family-offices` — each has a matching download PDF slug in `public/assets/pdfs/`
- Resource hubs under `/resources/<type>/` with dynamic `[slug]` detail pages
- `/glossary/[slug]` for term pages
- `/blog/[slug]` for posts

### Environment variables (Monday.com CRM)

| Variable | Purpose |
|---|---|
| `MONDAY_API_TOKEN` | API auth token |
| `MONDAY_BOARD_ID` | Target board |
| `MONDAY_GROUP_ID` | Target group |
| `MONDAY_COL_*` | Column ID mappings (name, email, phone, company, telegram, message, consent, asset, source_path, referrer, timestamp) |

`MONDAY_ENABLED` is false if token/board/group are missing — the API route returns 500 in that case. Set `MONDAY_COL_DATE` instead of `MONDAY_COL_TIMESTAMP` when the column type is a date picker (changes the value shape sent).

### Path aliases

`@/` maps to the repo root. Prefer relative imports (`../components/`) over alias imports inside `app/` to avoid bundler edge cases (existing code does this).
