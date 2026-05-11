# Design tokens

Source of truth: [tailwind.config.ts](tailwind.config.ts). This file is the human-readable reference — keep it in sync if you change the config.

## Colours

| Token              | Hex       | Used for                                              |
| ------------------ | --------- | ----------------------------------------------------- |
| `ink`              | `#1a1a1a` | Primary text                                          |
| `ink-muted`        | `#5a5a5a` | Secondary text, body copy                             |
| `accent`           | `#3f7290` | Primary CTA buttons, links, brand accent              |
| `accent-hover`     | `#34607a` | CTA hover state — derived from `accent`, tweak freely |
| `surface`          | `#ffffff` | Page background                                       |
| `surface-subtle`   | `#f5f5f5` | Card backgrounds (pain points, audience cards, etc.)  |
| `success`          | `#86ad34` | Green check icons, positive status                    |

### Tailwind usage

```jsx
<button className="bg-accent hover:bg-accent-hover text-white">…</button>
<div className="bg-surface-subtle">…</div>
<CheckIcon className="text-success" />
```

## Typography

- Sans: **Inter** (via `next/font`, CSS var `--font-inter`) — body, UI
- Serif: **Roboto Slab** (via `next/font`, CSS var `--font-roboto-slab`) — headings

Both wired in [src/app/layout.tsx](src/app/layout.tsx) and exposed as `font-sans` / `font-serif` Tailwind utilities.

## Layout

- `max-w-prose` is customised to `70ch` (default Tailwind is `65ch`) — used for readable text columns.
- Section pattern: `mx-auto max-w-6xl px-6 py-16 border-t border-black/10`.

## Notes

- `accent-hover` is a hand-picked darker variant of `accent`. If you change `accent`, recompute (≈7% lower lightness in HSL) or pick by eye.
- `accent` is shared across the CombiningMinds family of sites (combiningminds.org, unlocktana.com, logseqmastery.com) for visual consistency. Don't diverge per product unless there's a deliberate reason.
