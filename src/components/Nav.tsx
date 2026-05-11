"use client";

import Link from "next/link";
import { useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/about", label: "About instructor" },
];

const freeResources = [
  { href: "/blog", label: "Blog" },
  { href: "/blog/free-youtube-course-logseq", label: "YouTube Course" },
  { href: "/blog/best-beginner-logseq-videos", label: "My best videos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between gap-6">
        {/* Brand block — Logseq Mastery alongside a cross-link back to the parent CombiningMinds site. */}
        <div className="flex items-center gap-4">
          <Link href="/" className="font-serif text-xl tracking-tight">
            Logseq Mastery
          </Link>
          <span className="text-ink-muted text-sm hidden md:inline">·</span>
          <a
            href="https://combiningminds.org"
            className="hidden md:inline text-sm text-ink-muted hover:text-ink transition-colors"
          >
            CombiningMinds
          </a>
        </div>

        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Free resources dropdown — all entries are internal blog post URLs (not external playlists). */}
            <li className="relative">
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
                className="text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
                aria-expanded={open}
                aria-haspopup="menu"
              >
                Free resources
                <span aria-hidden className="text-xs">
                  ▾
                </span>
              </button>
              {open && (
                <ul
                  role="menu"
                  className="absolute right-0 mt-2 min-w-[220px] rounded-md border border-black/10 bg-white shadow-lg py-1 z-50"
                >
                  {freeResources.map((r) => (
                    <li key={r.href} role="none">
                      <Link
                        role="menuitem"
                        href={r.href}
                        className="block px-4 py-2 text-ink-muted hover:bg-surface-subtle hover:text-ink"
                        onClick={() => setOpen(false)}
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a
                href="https://www.logseqmastery.com/school"
                className="text-ink-muted hover:text-ink transition-colors"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
