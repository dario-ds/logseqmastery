type YouTubeEmbedProps = {
  videoId?: string | null;
  title?: string;
  start?: number;
  className?: string;
};

/**
 * YouTube inline embed using the privacy-enhanced (no-cookie) host.
 * If `videoId` is null/undefined, renders a placeholder block — handy while
 * scaffolding pages without breaking the layout.
 */
export function YouTubeEmbed({
  videoId,
  title = "YouTube video",
  start,
  className,
}: YouTubeEmbedProps) {
  if (!videoId) {
    return (
      <div
        className={
          "aspect-video w-full rounded-lg bg-surface-subtle border border-black/10 flex items-center justify-center text-ink-muted " +
          (className ?? "")
        }
      >
        <span className="text-sm">[ video ID not set ]</span>
      </div>
    );
  }

  const params = new URLSearchParams();
  if (start) params.set("start", String(start));
  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}${
    params.toString() ? `?${params.toString()}` : ""
  }`;

  return (
    <div className={"aspect-video w-full overflow-hidden rounded-lg border border-black/10 " + (className ?? "")}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
