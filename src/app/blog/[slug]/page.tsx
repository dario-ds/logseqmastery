import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { Video } from "@/components/Video";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

const mdxComponents = {
  Video,
  YouTubeEmbed,
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const images =
    post.cover && post.coverWidth && post.coverHeight
      ? [
          {
            url: post.cover,
            width: post.coverWidth,
            height: post.coverHeight,
            alt: post.coverAlt ?? post.title,
          },
        ]
      : undefined;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://logseqmastery.com/blog/${slug}`,
    },
    openGraph: images ? { title: post.title, description: post.description, images } : undefined,
    twitter: images
      ? { card: "summary_large_image", title: post.title, description: post.description, images }
      : undefined,
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const hasCover = Boolean(post.cover && post.coverWidth && post.coverHeight);

  return (
    <article className="mx-auto max-w-prose px-6 pt-16 pb-24">
      <header className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          {formatDate(post.date)} · {post.readingMinutes} min read
        </p>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs bg-surface-subtle text-ink-muted border border-black/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {hasCover && (
          <Image
            src={post.cover!}
            width={post.coverWidth!}
            height={post.coverHeight!}
            alt={post.coverAlt ?? post.title}
            sizes="(min-width: 768px) 65ch, 100vw"
            priority
            className="mt-8 w-full h-auto rounded-md"
          />
        )}
      </header>
      <div className="prose prose-lg prose-neutral max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
