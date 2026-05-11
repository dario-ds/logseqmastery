import type { Metadata } from "next";
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
          {posts.map((p) => (
            <li key={p.slug} className="py-6">
              <Link href={`/blog/${p.slug}`} className="group block">
                <h2 className="font-serif text-2xl group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                {p.description && (
                  <p className="mt-2 text-ink-muted">{p.description}</p>
                )}
                <p className="mt-2 text-sm text-ink-muted">
                  {formatDate(p.date)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
