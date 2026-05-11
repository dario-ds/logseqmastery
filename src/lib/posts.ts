import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date: string; // ISO
  draft?: boolean;
  tags?: string[];
};

export type Post = PostMeta & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir() {
  if (!fs.existsSync(POSTS_DIR)) return false;
  return true;
}

export function getAllPosts(): PostMeta[] {
  if (!ensureDir()) return [];
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: PostMeta[] = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      date: String(data.date ?? new Date().toISOString()),
      draft: Boolean(data.draft ?? false),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    };
  });

  return posts
    .filter((p) => !p.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  if (!ensureDir()) return null;
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const filename of candidates) {
    const fullPath = path.join(POSTS_DIR, filename);
    if (!fs.existsSync(fullPath)) continue;
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      description: data.description ? String(data.description) : undefined,
      date: String(data.date ?? new Date().toISOString()),
      draft: Boolean(data.draft ?? false),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      content,
    };
  }
  return null;
}
