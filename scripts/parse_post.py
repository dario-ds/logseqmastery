"""One-off helper: parse a systeme.io blog post HTML and dump its structure."""
import json
import sys
from pathlib import Path


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
    # systeme.io emits JS-style \xHH escapes inside the JSON literal; rewrite them
    # to \uHHHH which JSON does understand.
    import re as _re
    raw = _re.sub(r"\\x([0-9a-fA-F]{2})", lambda m: "\\u00" + m.group(1), raw)
    return json.loads(raw)


if __name__ == "__main__":
    path = Path(sys.argv[1])
    html = path.read_text(encoding="utf-8")
    data = extract_preloaded_state(html)
    blog = data.get("blog", {})
    for k in (
        "blogPostTitle",
        "blogPostDescription",
        "blogPostDateTs",
        "blogPostCategories",
        "blogPostImageUrl",
    ):
        print(f"{k}: {repr(blog.get(k))[:300]}")
    ents = data.get("page", {}).get("entities", {})
    types = sorted({e.get("type") for e in ents.values()})
    print("\nENTITY TYPES:", types)
    # find the content placeholder
    for eid, e in ents.items():
        if e.get("type") == "BlogPostContentPlaceholder":
            print("\nBlogPostContentPlaceholder id:", eid)
            print("children:", e.get("childIds"))
