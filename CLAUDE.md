# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```powershell
npm run dev         # local dev server at http://localhost:3000
npm run build       # production build (also exercises generateStaticParams for blog)
npm run start       # serve the production build
npm run lint        # ESLint (eslint-config-next, flat config via eslint v9)
npm run typecheck   # tsc --noEmit — run this before declaring TS work done
```

There is no test runner configured. "Done" means `npm run typecheck && npm run lint && npm run build` all pass — the build is the strongest check because it surfaces RSC/Server Component boundary violations and bad MDX.

## What this repo is

Marketing site for **Logseq Mastery**, the Logseq course sold under the [CombiningMinds](https://combiningminds.org) brand. Single-product focus — the home page is the sales page, not a multi-card course catalogue. Sister project to [combiningminds.org](https://combiningminds.org) and [unlocktana.com](https://unlocktana.com), which share the same architecture.

## Architecture

**Marketing site, App Router, mostly RSC.** Pages live in [src/app/](src/app/) and render on the server. The only client components are [Nav.tsx](src/components/Nav.tsx) (uses `useState` for the Free resources dropdown) and [MailLink.tsx](src/components/MailLink.tsx) (resolves the mailto href on the client to dodge naive scrapers).

**Two third-party scripts — one inline, one loaded globally:**
- **Lemon Squeezy** (`lemon.js`) — loaded once globally via `next/script` with `strategy="lazyOnload"` in [src/app/layout.tsx](src/app/layout.tsx). It auto-binds to any element with the `lemonsqueezy-button` class, so the buy button just needs that class plus an `?embed=1` checkout URL. Don't import it per-page.
- **YouTube** — embedded inline via [YouTubeEmbed.tsx](src/components/YouTubeEmbed.tsx) (server component, no script needed — just an iframe pointed at `youtube-nocookie.com`). Video IDs live in [src/lib/videos.ts](src/lib/videos.ts) as a single-source-of-truth manifest.

**No Cal.com on this site.** Consulting lives on the parent site — the FAQ links to `https://combiningminds.org/consulting/` rather than embedding the booking widget here. If a `/consulting` page is ever added, prefer a Nav link out to combiningminds.org over duplicating the embed.

**Blog pipeline.** [src/lib/posts.ts](src/lib/posts.ts) reads `content/blog/*.mdx` from disk via `fs` + `gray-matter`. Posts are rendered through `next-mdx-remote/rsc` in [src/app/blog/[slug]/page.tsx](src/app/blog/%5Bslug%5D/page.tsx). Drafts (`draft: true` in frontmatter) only render in development. Static params are generated at build time, so adding a post requires a redeploy — not an ISR refresh.

**Path alias.** `@/*` → `./src/*` (configured in [tsconfig.json](tsconfig.json)). Use it for imports out of `src/`.

**Tailwind.** Custom palette (`ink`, `accent`, `surface`, `success`) — `accent` is `#3f7290`, shared across the CombiningMinds family of sites for visual consistency rather than nodding to any one product's brand. Full token reference in [design.md](design.md). The `content` glob in [tailwind.config.ts](tailwind.config.ts) includes `./content/**/*.{md,mdx}` so utility classes inside MDX still get picked up.

## Conventions worth knowing

- **Next.js 15+ dynamic params are async.** Page props use `params: Promise<{ slug: string }>` and must be `await`ed — see the blog post page. Don't write the synchronous (Next 14) form.
- **React 19 + Next 16 are intentional.** This project tracks latest majors. If you find yourself bumping `next` without bumping `react`, `react-dom`, `@types/react`, and `@types/react-dom` together, stop — that mismatch produces a runtime `"React Element from an older version of React"` error.
- **`overrides` in [package.json](package.json) is for vulnerability pinning.** `"postcss": "$postcss"` forces every transitive dep onto the root `postcss` version. If `npm audit` flags a transitive package, prefer adding to `overrides` over downgrading the direct dep — and re-run `npm audit` after.
- **Frontmatter is the source of truth for blog metadata** (`title`, `description`, `date`, `draft`, `tags`). The slug is derived from the filename; don't put a `slug:` in frontmatter.
- **Blog post dates are ISO strings** (`"2026-05-09"`), sorted lexicographically descending — keep the format consistent or sorting breaks.
- **YouTube IDs must be quoted strings in [src/lib/videos.ts](src/lib/videos.ts).** Bare 11-character IDs containing hyphens look like TypeScript identifiers and break the build with `"X is not defined"`.
- **`metadata` cannot be exported from a `"use client"` file.** If a page needs interactive state, split into a server page that exports `metadata` + a client island that handles the interactivity.

## Things to swap before launch

See [README.md](README.md) under "Things to swap before launch" — hero/portrait/logo placeholders, blog post inventory, testimonials, social-proof logos.
