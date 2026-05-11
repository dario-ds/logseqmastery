import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on Logseq, PKM, and intentional knowledge work.",
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Blog</h1>
      <p className="mt-4 text-lg text-ink-muted">
        Notes on Logseq, PKM, and intentional knowledge work.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-ink-muted italic">
          No posts yet. Drop an .mdx file in <code>content/blog/</code> to
          publish.
        </p>
      ) : (
        <ul className="mt-12 divide-y divide-black/10">
          {posts.map((p) => {
            const hasCover = Boolean(p.cover && p.coverWidth && p.coverHeight);
            return (
              <li key={p.slug} className="py-6">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex gap-5 items-start"
                >
                  {hasCover && (
                    <div className="hidden sm:block w-56 shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={p.cover!}
                        width={p.coverWidth!}
                        height={p.coverHeight!}
                        alt={p.coverAlt ?? p.title}
                        sizes="224px"
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-2xl group-hover:text-accent transition-colors">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="mt-2 text-ink-muted">{p.description}</p>
                    )}
                    <p className="mt-2 text-sm text-ink-muted">
                      {formatDate(p.date)} · {p.readingMinutes} min read
                    </p>
                    {p.tags && p.tags.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <li
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-surface-subtle text-ink-muted border border-black/10"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
