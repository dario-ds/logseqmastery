"""Migrate systeme.io blog posts from logseqmastery.com into MDX.

Walks the live page's preloaded state, converts each content entity to
Markdown, downloads referenced images, and writes content/blog/<slug>.mdx
plus public/blog/<slug>/<image>.

Run from repo root:
    python scripts/migrate-blog.py

Idempotent — re-running overwrites the MDX and re-downloads images that are
missing on disk (existing images are kept).
"""
from __future__ import annotations

import json
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

from markdownify import markdownify  # type: ignore

REPO = Path(__file__).resolve().parent.parent
CONTENT_DIR = REPO / "content" / "blog"
PUBLIC_DIR = REPO / "public" / "blog"
CACHE_DIR = REPO / ".migrate-cache"
CACHE_DIR.mkdir(exist_ok=True)

SLUGS = [
    "readwise",
    "logseq-templates",
    "logseq-vs-obsidian",
    "purchasing-power-parity-pricing",
    "adding-custom-css-to-logseq",
    "logseq-integrated-thinking-environment",
    "queries-in-logseq",
    "how-i-use-omnivore-in-my-read-it-later-workflow",
    "logseq-namespaces",
]

UA = "Mozilla/5.0 (compatible; logseqmastery-migrator/1.0)"


def fetch(url: str, dest: Path) -> bytes:
    if dest.exists():
        return dest.read_bytes()
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    dest.write_bytes(data)
    return data


def extract_preloaded_state(html: str) -> dict:
    marker = "PRELOADED_STATE__="
    i = html.find(marker)
    if i == -1:
        raise SystemExit("preloaded state not found")
    start = i + len(marker)
    depth = 0
    in_str = False
    esc = False
    end = None
    for j in range(start, len(html)):
        c = html[j]
        if esc:
            esc = False
            continue
        if c == "\\" and in_str:
            esc = True
            continue
        if c == '"':
            in_str = not in_str
            continue
        if in_str:
            continue
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                end = j + 1
                break
    raw = html[start:end]
    raw = re.sub(r"\\x([0-9a-fA-F]{2})", lambda m: "\\u00" + m.group(1), raw)
    return json.loads(raw)


YOUTUBE_ID_RE = re.compile(
    r"(?:youtu\.be/|youtube(?:-nocookie)?\.com/(?:watch\?v=|embed/|shorts/))([A-Za-z0-9_-]{11})"
)


def youtube_id(url: str) -> str | None:
    m = YOUTUBE_ID_RE.search(url or "")
    return m.group(1) if m else None


def html_to_md(html_content: str) -> str:
    md = markdownify(
        html_content,
        heading_style="ATX",
        bullets="-",
        strong_em_symbol="*",
        escape_underscores=False,
        escape_asterisks=False,
    )
    # collapse excessive blank lines
    md = re.sub(r"\n{3,}", "\n\n", md).strip()
    return md


def mdx_safe(md: str) -> str:
    """Escape characters MDX treats as JSX/expression syntax in body text.

    `{` and `}` outside of code fences/backticks must be `\\{` / `\\}` or MDX
    will try to parse them as JSX expressions and crash on content like
    Readwise's `{{title}}` template variables.
    """
    out: list[str] = []
    in_fence = False
    for line in md.split("\n"):
        stripped = line.lstrip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            out.append(line)
            continue
        if in_fence:
            out.append(line)
            continue
        # Split on inline-code spans and only escape outside them.
        parts = re.split(r"(`[^`]*`)", line)
        for i, p in enumerate(parts):
            if i % 2 == 0:
                p = p.replace("{", "&#123;").replace("}", "&#125;")
            parts[i] = p
        out.append("".join(parts))
    return "\n".join(out)


def slugify_image(url: str) -> str:
    name = urllib.parse.urlparse(url).path.rsplit("/", 1)[-1]
    # strip the hex-timestamp prefix systeme.io uses: 64fad446cc4b5_CustomCSS.png
    name = re.sub(r"^[0-9a-f]{10,}_", "", name)
    return name or "image"


def render_entity(eid: str, ents: dict, files: dict, slug: str, image_downloads: dict[str, str]) -> str:
    e = ents.get(eid)
    if not e:
        return ""
    t = e.get("type")
    parts: list[str] = []

    if t in ("BlogPostBody", "Section", "Row", "Column", "BlogPostContentPlaceholder"):
        for c in e.get("childIds") or []:
            parts.append(render_entity(c, ents, files, slug, image_downloads))
        return "\n\n".join(p for p in parts if p.strip())

    if t in ("Headline", "Text"):
        content = e.get("content") or ""
        if not content.strip():
            return ""
        return html_to_md(content)

    if t == "Video":
        url = e.get("url") or ""
        vid = youtube_id(url)
        if vid:
            return f'<YouTubeEmbed videoId="{vid}" title="Video" />'
        return f"[Video: {url}]({url})"

    if t == "HorizontalLine":
        return "---"

    if t == "Image":
        file_id = e.get("fileId")
        link = e.get("link")
        f = files.get(str(file_id)) if file_id is not None else None
        if not f:
            return ""
        src = f.get("path")
        name = slugify_image(src)
        image_downloads[src] = name
        public_path = f"/blog/{slug}/{name}"
        alt = f.get("name") or name
        img = f"![{alt}]({public_path})"
        if link:
            return f"[{img}]({link})"
        return img

    if t == "RawHtml":
        html = e.get("html") or ""
        # Skip mailing-list/subscribe blocks and other template noise
        if "mailerlite" in html.lower() or "mlb2-" in html or "ml-form-embed" in html:
            return ""
        return html_to_md(html)

    if t in ("BUTTON", "Menu", "BlogPostTitle", "BlogPostDate",
             "BlogPostCategories", "BlogPostImage", "BlogContentPlaceholder",
             "BlogPostLayoutBody", "Body"):
        return ""

    # Default: try recursing
    for c in e.get("childIds") or []:
        parts.append(render_entity(c, ents, files, slug, image_downloads))
    return "\n\n".join(p for p in parts if p.strip())


def find_root(ents: dict, type_name: str) -> str | None:
    for eid, e in ents.items():
        if e.get("type") == type_name:
            return eid
    return None


def derive_tags(categories_json: str | None) -> list[str]:
    if not categories_json:
        return []
    try:
        cats = json.loads(categories_json)
    except Exception:
        return []
    return [c.get("name") for c in cats if c.get("name")]


def frontmatter(fm: dict) -> str:
    lines = ["---"]
    for k, v in fm.items():
        if isinstance(v, list):
            inner = ", ".join(f'"{x}"' for x in v)
            lines.append(f"{k}: [{inner}]")
        elif isinstance(v, bool):
            lines.append(f"{k}: {str(v).lower()}")
        else:
            lines.append(f'{k}: "{v}"')
    lines.append("---")
    return "\n".join(lines)


def migrate(slug: str) -> None:
    url = f"https://www.logseqmastery.com/blog/{slug}"
    cache = CACHE_DIR / f"{slug}.html"
    print(f"[{slug}] fetch")
    html = fetch(url, cache).decode("utf-8", errors="replace")
    data = extract_preloaded_state(html)
    blog = data.get("blog", {})
    ents = data["page"]["entities"]
    files = data.get("files", {})
    files = {str(k): v for k, v in files.items()}

    root = find_root(ents, "BlogPostContentPlaceholder")
    if not root:
        print(f"[{slug}] !! no BlogPostContentPlaceholder")
        return

    image_downloads: dict[str, str] = {}
    body_md = render_entity(root, ents, files, slug, image_downloads)
    body_md = re.sub(r"\n{3,}", "\n\n", body_md).strip()
    body_md = mdx_safe(body_md)

    # hero image
    hero_url = blog.get("blogPostImageUrl")
    if hero_url:
        image_downloads[hero_url] = "hero" + Path(slugify_image(hero_url)).suffix

    # download images
    if image_downloads:
        out_dir = PUBLIC_DIR / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        for src, name in image_downloads.items():
            dst = out_dir / name
            if dst.exists():
                continue
            try:
                print(f"  GET {src} -> {dst.relative_to(REPO)}")
                req = urllib.request.Request(src, headers={"User-Agent": UA})
                with urllib.request.urlopen(req, timeout=30) as r:
                    dst.write_bytes(r.read())
            except Exception as ex:
                print(f"  !! image download failed: {src}: {ex}")

    date_ts = blog.get("blogPostDateTs")
    try:
        iso = datetime.fromtimestamp(int(date_ts), tz=timezone.utc).strftime("%Y-%m-%d")
    except Exception:
        iso = "2024-01-01"

    fm = {
        "title": blog.get("blogPostTitle", slug).replace('"', "'"),
        "description": (blog.get("blogPostDescription") or "").replace('"', "'"),
        "date": iso,
        "draft": False,
        "tags": derive_tags(blog.get("blogPostCategories")),
    }

    mdx = frontmatter(fm) + "\n\n" + body_md + "\n"
    out = CONTENT_DIR / f"{slug}.mdx"
    out.write_text(mdx, encoding="utf-8")
    print(f"[{slug}] wrote {out.relative_to(REPO)} ({len(mdx)} bytes)")


def main() -> None:
    targets = sys.argv[1:] or SLUGS
    for s in targets:
        migrate(s)


if __name__ == "__main__":
    main()
