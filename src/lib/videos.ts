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
  // /blog/free-youtube-course-logseq — 8 videos (TODO(dario): confirm exact count)
  freeYoutubeCourse: {
    whatsSoSpecial: null as string | null, // "What's so special about Logseq?"
    settingUp: null as string | null, // "Setting up Logseq on your computer"
    blocksAndPages: null as string | null, // "Introduction to blocks and pages"
    biDirectionalLinks: null as string | null, // "Adding structure with bi-directional links"
    tagging: null as string | null, // "Tagging for task management, spaced-repetition..."
    uiAndBlockRefs: null as string | null, // "Maximising the user interface, and an intro to block references"
    menusAndGraph: null as string | null, // "Exploring the menus and other user interface elements"
    settingForSuccess: null as string | null, // "Setting yourself up for success on Logseq"
  },

  // /blog/best-beginner-logseq-videos — 4 videos
  bestBeginnerVideos: {
    mentalModels: null as string | null, // "A guide to the mental models behind Logseq"
    basicsBlocksAndPages: null as string | null, // "Grasping the basics: blocks and pages"
    doublingDownBasics: null as string | null, // "Doubling down on the basic building blocks"
    addingStructure: null as string | null, // "How to think about adding structure to your Logseq database"
  },
} as const;
