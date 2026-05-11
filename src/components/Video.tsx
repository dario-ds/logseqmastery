import { VIDEOS } from "@/lib/videos";
import { YouTubeEmbed } from "./YouTubeEmbed";

/**
 * Thin wrapper around <YouTubeEmbed /> that looks up video IDs through the
 * single-source-of-truth manifest in src/lib/videos.ts.
 *
 * Used from MDX blog posts where the VIDEOS object isn't directly in scope:
 *
 *   <Video src="freeYoutubeCourse.whatsSoSpecial" title="..." />
 *
 * For non-MDX pages (RSC), prefer the direct form
 * `<YouTubeEmbed videoId={VIDEOS.freeYoutubeCourse.whatsSoSpecial} />` since
 * it gives you type-checking on the key path.
 */
export function Video({
  src,
  title,
  start,
  className,
}: {
  src: string;
  title?: string;
  start?: number;
  className?: string;
}) {
  const parts = src.split(".");
  let value: unknown = VIDEOS;
  for (const p of parts) {
    if (typeof value !== "object" || value === null) {
      value = null;
      break;
    }
    value = (value as Record<string, unknown>)[p];
  }
  const videoId = typeof value === "string" ? value : null;
  return (
    <YouTubeEmbed
      videoId={videoId}
      title={title}
      start={start}
      className={className}
    />
  );
}
