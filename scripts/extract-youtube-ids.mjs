// Pulls YouTube video IDs out of the live logseqmastery.com pages.
// Node version — avoids PowerShell heuristics that some antivirus tools
// flag on Invoke-WebRequest scripts.
//
// Requires Node 18+ (native fetch).
//
// Usage (from repo root):
//   node ./scripts/extract-youtube-ids.mjs
//
// Output: one section per URL, listing distinct IDs in the order they
// appear. Paste them into src/lib/videos.ts.

const pages = [
  "https://www.logseqmastery.com/",
  "https://www.logseqmastery.com/syllabus",
  "https://www.logseqmastery.com/about",
  "https://www.logseqmastery.com/blog/free-youtube-course-logseq",
  "https://www.logseqmastery.com/blog/best-beginner-logseq-videos",
];

// Capture the 11-char YouTube ID after any common embed/share URL form.
const idRegex =
  /(?:youtube(?:-nocookie)?\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/g;

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; logseqmastery-id-extractor)",
      Accept: "text/html,*/*;q=0.8",
    },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

function extractIds(html) {
  const seen = new Set();
  const out = [];
  for (const m of html.matchAll(idRegex)) {
    const id = m[1];
    if (!seen.has(id)) {
      seen.add(id);
      out.push(id);
    }
  }
  return out;
}

async function main() {
  for (const url of pages) {
    console.log(`─── ${url} ───`);
    let html;
    try {
      html = await fetchHtml(url);
    } catch (err) {
      console.log(`  (request failed: ${err instanceof Error ? err.message : err})`);
      console.log("");
      continue;
    }
    const ids = extractIds(html);
    if (ids.length === 0) {
      console.log("  no YouTube IDs found");
    } else {
      for (const id of ids) console.log(`  ${id}`);
    }
    console.log("");
  }

  console.log("Mapping hint for src/lib/videos.ts:");
  console.log("");
  console.log("  /blog/free-youtube-course-logseq — 8 videos, in order:");
  console.log("    1 → freeYoutubeCourse.whatsSoSpecial");
  console.log("    2 → freeYoutubeCourse.settingUp");
  console.log("    3 → freeYoutubeCourse.blocksAndPages");
  console.log("    4 → freeYoutubeCourse.biDirectionalLinks");
  console.log("    5 → freeYoutubeCourse.tagging");
  console.log("    6 → freeYoutubeCourse.uiAndBlockRefs");
  console.log("    7 → freeYoutubeCourse.menusAndGraph");
  console.log("    8 → freeYoutubeCourse.settingForSuccess");
  console.log("");
  console.log("  /blog/best-beginner-logseq-videos — 4 videos, in order:");
  console.log("    1 → bestBeginnerVideos.mentalModels");
  console.log("    2 → bestBeginnerVideos.basicsBlocksAndPages");
  console.log("    3 → bestBeginnerVideos.doublingDownBasics");
  console.log("    4 → bestBeginnerVideos.addingStructure");
  console.log("");
  console.log("Quote every ID — bare 11-char strings with hyphens look like");
  console.log("TypeScript identifiers and break the build.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
