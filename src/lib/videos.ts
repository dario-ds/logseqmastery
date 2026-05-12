/**
 * Centralised YouTube video IDs.
 *
 * Populate the IDs by running `scripts/extract-youtube-ids.mjs` against the
 * live logseqmastery.com pages and pasting the results here. Each entry is
 * the 11-character YouTube ID (the bit after `v=` in a watch URL, or after
 * `/embed/` in an iframe src).
 *
 * IMPORTANT: every ID must be a *quoted string*. A bare 11-char identifier
 * with hyphens (e.g. `abc123XYZ_-`) looks like a TypeScript expression and
 * breaks the build with "X is not defined". Correct form:
 *
 *   intro: "abc123XYZ_-" as string | null
 *
 * If a value is `null`, the <YouTubeEmbed> component renders a placeholder
 * block so the page still lays out correctly.
 */

export const VIDEOS = {
  // /blog/free-youtube-course-logseq — 8 videos
  freeYoutubeCourse: {
    whatsSoSpecial: "oBtKHwFBn0k" as string | null,
    settingUp: "jtJUN-L7kSs" as string | null,
    blocksAndPages: "3OgHp12xhSI" as string | null,
    biDirectionalLinks: "MapLiIRQXDs" as string | null,
    tagging: "zyFcvET62PY" as string | null,
    uiAndBlockRefs: "rc1act1aQes" as string | null,
    menusAndGraph: "Clud7iTV7O4" as string | null,
    settingForSuccess: "QYE_HGGwTYU" as string | null,
  },

  // /blog/best-beginner-logseq-videos — 4 videos
  bestBeginnerVideos: {
    mentalModels: null as string | null, // "A guide to the mental models behind Logseq"
    basicsBlocksAndPages: null as string | null, // "Grasping the basics: blocks and pages"
    doublingDownBasics: null as string | null, // "Doubling down on the basic building blocks"
    addingStructure: null as string | null, // "How to think about adding structure to your Logseq database"
  },
} as const;
