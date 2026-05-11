# logseqmastery.com

Marketing site for **Logseq Mastery**, a CombiningMinds course on the Logseq PKM tool. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind, deployed on Vercel.

Sister project to [combiningminds.org](https://combiningminds.org) and [unlocktana.com](https://unlocktana.com) — same architecture, single-product focus.

## Stack

- **Next.js 16** + **React 19** (peer-pinned together — see CLAUDE.md)
- **TypeScript** strict
- **Tailwind CSS** + `@tailwindcss/typography` for blog prose
- **next-mdx-remote** — MDX blog posts read from `/content/blog`
- **Lemon Squeezy** — global `lemon.js` auto-binds buy buttons by class
- No Cal.com on this site — consulting is on the parent site (combiningminds.org/consulting)

## Bootstrap (one-time)

The scaffold is hand-written. If you ever fork from `create-next-app`, run this first to recover from a half-formed `.git`:

```powershell
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue
git init
git add -A
git commit -m "Initial scaffold (clean baseline)"
```

Then copy the Claude settings template into the (Claude-managed) settings dir:

```powershell
New-Item -ItemType Directory -Force .claude | Out-Null
Copy-Item claude-settings.template.json .claude/settings.json
```

(The template lives at the repo root because Claude protects writes to `.claude/`. After copying, you can delete the root template file or keep it as a versioned reference.)

## Install & run

```powershell
npm install
npm audit
# If npm audit flags transitive packages, prefer adding to "overrides" in package.json
# over downgrading direct deps. See CLAUDE.md.

npm run dev
```

Site runs at `http://localhost:3000`.

## Image downloads

Run on your local machine (not from inside the Claude sandbox — Cloudfront is blocked there):

```powershell
node ./scripts/download-images.mjs
```

Avoid PowerShell `Invoke-WebRequest` for downloading — Bitdefender flags scripts that write fetched files to disk. The Node script uses native fetch (Node 18+) and avoids the heuristic.

## Project layout

```
src/
  app/
    layout.tsx          Root layout, nav + footer, lemon.js script
    page.tsx            Home (Logseq Mastery sales page)
    about/page.tsx      About Dario
    syllabus/page.tsx   Course syllabus
    blog/
      page.tsx          Blog index
      [slug]/page.tsx   Blog post (MDX)
  components/
    Nav.tsx             Client component — Free resources dropdown
    Footer.tsx          Social icons + cross-link to combiningminds.org
    MailLink.tsx        Client mailto resolver (cheap obfuscation)
    YouTubeEmbed.tsx    Iframe to youtube-nocookie.com
  lib/
    posts.ts            Reads content/blog/*.mdx via gray-matter
    videos.ts           Single-source-of-truth YouTube ID manifest
content/
  blog/                 MDX blog posts
public/
  images/               Static assets — populated by scripts/download-images.mjs
scripts/
  download-images.mjs   Downloads Systeme.io CDN images into /public/images
```

## Writing a blog post

Add a file to `content/blog/<slug>.mdx`:

```mdx
---
title: "My post title"
description: "Short summary used in metadata and the index page."
date: "2026-05-09"
draft: false
tags: ["logseq", "pkm"]
---

Markdown content here. You can drop in JSX components when needed.
```

Posts with `draft: true` only render in development. Posts are sorted by `date` descending on the index.

## Things to swap before launch

- [ ] All `TODO(dario):` markers in `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/syllabus/page.tsx`
- [ ] Hero — currently text-only (no banner image on the live site either)
- [ ] Portrait — `/public/images/portrait.jpg` (referenced in `src/app/about/page.tsx`)
- [ ] Social-proof institutional logos — `/public/images/logos/*.png`
- [ ] Testimonials block on home and About (JS-rendered on live site, fetch came back empty)
- [ ] Blog post inventory beyond the two known posts (`free-youtube-course-logseq`, `best-beginner-logseq-videos`)
- [ ] YouTube IDs in `src/lib/videos.ts` — run `scripts/extract-youtube-ids.mjs` once live posts are imported
- [ ] Delete placeholder `content/blog/hello-world.mdx` after real posts are imported (may need to be run on host — sandbox bind-mount can refuse deletes)

## Deploy

Connect the repo to Vercel — no extra config needed. The `next build` command produces a fully static site for the marketing pages and statically renders blog posts at build time via `generateStaticParams`.

## Scripts

```powershell
npm run dev         # local dev server
npm run build       # production build
npm run start       # serve the production build locally
npm run lint        # ESLint (flat config, eslint v9 + eslint-config-next)
npm run typecheck   # tsc --noEmit
```

"Done" on a code change means `npm run typecheck && npm run lint && npm run build` all pass.

## Migration lessons applied (from combiningminds.org and unlocktana.com builds)

- Next major + React major are pinned together up-front. Bumping `next` without `react` produced a runtime "React Element from an older version of React" error last time.
- `overrides.postcss` is set to flush a transitive vulnerability that npm audit surfaced; same pattern here so we don't trip on it again.
- `.claude/settings.json` allowlist includes `npm run build / lint / typecheck / dev` so quality checks don't prompt for permission on every run.
- `params` in `[slug]/page.tsx` are `Promise<...>` and `await`ed (Next 15+ async params).
- YouTube IDs in `src/lib/videos.ts` are quoted strings — bare IDs with hyphens look like identifiers and break the build.
- Image downloads run on the host, not in the sandbox (Cloudfront is blocked from the sandbox network).
