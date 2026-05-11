// Downloads images from the live logseqmastery.com Systeme.io CDN into /public/images.
// Cross-platform Node version — avoids PowerShell heuristics that some
// antivirus tools (e.g. Bitdefender) flag on Invoke-WebRequest scripts.
//
// Requires Node 18+ (native fetch).
//
// Usage (from repo root):
//   node ./scripts/download-images.mjs
//
// Re-runnable. Existing files are overwritten. Failures are logged but
// don't stop the run.
//
// IMPORTANT: this script must run on your host machine, not inside the
// Claude sandbox — Cloudfront is blocked from the sandbox network.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, "..");
const imagesDir = join(repoRoot, "public", "images");
const blogDir = join(imagesDir, "blog");
const logosDir = join(imagesDir, "logos");

/**
 * Each entry's `path` is relative to /public/images/ and MUST match an
 * image reference somewhere in src/. After editing, grep the codebase for
 * `/images/` to confirm parity.
 *
 * @type {{url: string, path: string}[]}
 */
const assets = [
  // Portrait — referenced in src/app/about/page.tsx
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/6746cb0f78f1d_Dario-BusinessPortraits-4.jpg",
    path: "portrait.jpg",
  },

  // Institutional social-proof logos — referenced in src/app/page.tsx,
  // ordered to match the live home page.
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653920a040eee_Oxford.png",
    path: "logos/oxford.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653921a752755_Microsoft_logo_2012.svg.png",
    path: "logos/microsoft.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653920f75afed_MonitorDeloitteLogo.png",
    path: "logos/monitor-deloitte.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653920e01ee07_cambridge.png",
    path: "logos/cambridge.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653921931c1e0_coursera.png",
    path: "logos/coursera.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653920b5f364f_Bain_and_Company_Logo.png",
    path: "logos/bain.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/6539223d65b84_SOAS-logo.png",
    path: "logos/soas.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/653923283bc16_acc_logo_black_purple_rgb.png",
    path: "logos/acca.png",
  },

  // Combining Minds favicon — used in the live site header as a small icon
  // next to the brand text. Currently NOT referenced anywhere in src/ (the
  // scaffold's Nav is text-only). Downloaded so it's available locally if
  // you decide to swap a graphic into Nav.tsx later — safe to remove this
  // entry otherwise.
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64f9899a36c1b_CombiningMindsFavicon.png",
    path: "favicon-combiningminds.png",
  },

  // Blog cover images. Each one is the systeme.io OG image for that post,
  // rendered as the hero on the post page and as a thumbnail on the blog
  // index. The path matches the canonical location read by
  // src/lib/posts.ts via the `cover` frontmatter field.
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64fb04423b830_learning.png",
    path: "blog/best-beginner-logseq-videos.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64fad446cc4b5_CustomCSS.png",
    path: "blog/adding-custom-css-to-logseq.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/63d39a08f3a01_omniLogseq.png",
    path: "blog/how-i-use-omnivore-in-my-read-it-later-workflow.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/63ecd2ea814bb_ITE2.png",
    path: "blog/logseq-integrated-thinking-environment.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64faffaa29c4d_Namespace.png",
    path: "blog/logseq-namespaces.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64faff86ec9f7_templates.png",
    path: "blog/logseq-templates.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64fadbfbd8e72_obsidian.png",
    path: "blog/logseq-vs-obsidian.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/64fb09a9c0217_ppp.png",
    path: "blog/purchasing-power-parity-pricing.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/63d3992782c31_query.png",
    path: "blog/queries-in-logseq.png",
  },
  {
    url: "https://d1yei2z3i6k35z.cloudfront.net/1932909/66d0665831a3d_BlogThumbnail.png",
    path: "blog/readwise.png",
  },
];

async function downloadOne({ url, path }) {
  const dest = join(imagesDir, path);
  await mkdir(dirname(dest), { recursive: true });
  console.log(`→ ${url}`);
  console.log(`  ${dest}`);
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; logseqmastery-image-downloader)" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  await mkdir(blogDir, { recursive: true });
  await mkdir(logosDir, { recursive: true });

  let ok = 0;
  let fail = 0;
  for (const a of assets) {
    try {
      const bytes = await downloadOne(a);
      console.log(`  ${(bytes / 1024).toFixed(1)} KB`);
      ok++;
    } catch (err) {
      console.warn(`  FAILED: ${err instanceof Error ? err.message : err}`);
      fail++;
    }
  }
  console.log("");
  console.log(`Done. ${ok} downloaded, ${fail} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
