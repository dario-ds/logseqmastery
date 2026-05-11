import type { Metadata } from "next";
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
  return {
    title: post.title,
    description: post.description,
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

  return (
    <article className="mx-auto max-w-prose px-6 pt-16 pb-24">
      <header className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-ink-muted">{formatDate(post.date)}</p>
      </header>
      <div className="prose prose-lg prose-neutral max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
