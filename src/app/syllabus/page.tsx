import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";

const CHECKOUT_URL =
  "https://combiningminds.lemonsqueezy.com/checkout/buy/7f1b558a-e380-41be-b19e-b66d36c90457?embed=1";

export const metadata: Metadata = {
  title: "Syllabus",
  description:
    "Logseq Mastery builds up your Logseq knowledge with a structured approach that you won't find in any YouTube videos.",
};

// Tutorials — bold lead + body where the source highlights specific phrases.
const tutorials: { content: ReactNode }[] = [
  {
    content: (
      <>
        High-level principles of{" "}
        <strong>note-taking in a non-linear environment</strong>
      </>
    ),
  },
  {
    content: (
      <>
        Tutorials on setting up Logseq on your computer and{" "}
        <strong>understanding the way the application interacts with your files.</strong>
      </>
    ),
  },
  {
    content: <strong>Become at home in the Logseq interface</strong>,
  },
  {
    content: (
      <>
        <strong>Understanding the core building blocks</strong> of Logseq as a
        tool: Logseq as a text editor, an outliner and a bi-directional linking
        tool
      </>
    ),
  },
  {
    content: (
      <>
        <strong>Developing good note-taking practices</strong> in Logseq in
        order to effectively input, organize, and retrieve information.
      </>
    ),
  },
  {
    content: (
      <>
        <strong>Exploring the extended feature set:</strong> Task management,
        PDF annotation, plugins and themes, spaced repetition and keyboard
        shortcuts
      </>
    ),
  },
  {
    content: <strong>Auxiliary integrations and customization</strong>,
  },
  {
    content: (
      <>
        Principles for <strong>maintaining a well-developed database</strong>
      </>
    ),
  },
];

const workflows: { content: ReactNode }[] = [
  {
    content: (
      <>
        Walkthroughs showing how to{" "}
        <strong>import and structure old notes in Logseq</strong>
      </>
    ),
  },
  {
    content: (
      <>
        A comprehensive{" "}
        <strong>
          framework for building a personal knowledge management system
        </strong>{" "}
        in Logseq
      </>
    ),
  },
  {
    content: (
      <>
        <strong>Step-by-step guides</strong> to building your own system in
        Logseq
      </>
    ),
  },
  {
    content: (
      <>
        <strong>Detailed breakdowns of different workflow implementations</strong>{" "}
        in Logseq, with commentary on the rationale behind certain design
        decisions.
      </>
    ),
  },
  {
    content: <strong>Diagrams detailing workflows and processes</strong>,
  },
  {
    content: (
      <>
        <strong>Resources and templates</strong> to facilitate improved writing
        and self-awareness practices
      </>
    ),
  },
];

export default function SyllabusPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
        Logseq Mastery syllabus
      </h1>

      <div className="mt-6 max-w-prose space-y-5 text-lg leading-relaxed">
        <p>
          Logseq Mastery builds up your Logseq knowledge with a structured
          approach that you won&rsquo;t find in any YouTube videos. From the
          very basics to an advanced level,{" "}
          <strong>
            it will provide a valuable resource for you to come back to
          </strong>{" "}
          when you hit snags later down the line.
        </p>
        <p>
          You&rsquo;ll learn about Logseq in detail, ensuring that you{" "}
          <strong>
            don&rsquo;t miss out on any critical features or functionality,
          </strong>{" "}
          before learning how to build a functional personal knowledge
          management system.
        </p>
        <p>
          Logseq Mastery is divided into two parts to support you at whatever
          stage of the journey you&rsquo;re on:
        </p>
      </div>

      <ul className="mt-8 grid md:grid-cols-2 gap-6">
        <li className="p-6 rounded-lg bg-surface-subtle leading-relaxed">
          <h2 className="font-serif text-2xl">Tutorials</h2>
          <p className="mt-2 text-ink-muted">
            The point of departure. A step-by-step guide to becoming at home in
            Logseq, with detail on developing good practices for capturing,
            organizing and retrieving your notes.
          </p>
        </li>
        <li className="p-6 rounded-lg bg-surface-subtle leading-relaxed">
          <h2 className="font-serif text-2xl">Workflows</h2>
          <p className="mt-2 text-ink-muted">
            A hub of ideas and implementation examples. Leverages my best
            thinking on personal knowledge management to help you build your
            ideal workflows.
          </p>
        </li>
      </ul>

      <div className="mt-14">
        <h2 className="font-serif text-2xl tracking-tight">Part 1: Tutorials</h2>
        <ul className="mt-6 space-y-4">
          {tutorials.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg leading-relaxed"
            >
              <svg
                className="w-5 h-5 mt-1.5 flex-shrink-0 text-accent"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 10.5l3.5 3.5L15 7" />
              </svg>
              <span className="text-ink-muted">{t.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="font-serif text-2xl tracking-tight">Part 2: Workflows</h2>
        <ul className="mt-6 space-y-4">
          {workflows.map((w, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg leading-relaxed"
            >
              <svg
                className="w-5 h-5 mt-1.5 flex-shrink-0 text-accent"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 10.5l3.5 3.5L15 7" />
              </svg>
              <span className="text-ink-muted">{w.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <h2 className="font-serif text-2xl tracking-tight">A note on updates</h2>
        <div className="mt-6 space-y-4 text-ink-muted leading-relaxed">
          <p>
            The last major Logseq release was Apr 23rd, 2024. The Logseq team
            has been focused on the database version, which is currently in
            closed alpha. The good news is that all the course content is still
            relevant and applicable.
          </p>
          <p>
            As mentioned above, the content is organized in two areas:{" "}
            <strong>Tutorials</strong> and <strong>Workflows.</strong>
          </p>
          <p>
            Tutorials cover Logseq features in depth, and provide a deep
            understanding of how to use them effectively. This is evergreen
            content, and will remain so beyond the release of the database
            version.
          </p>
          <p>
            Workflows cover some aspects which remain evergreen, such as
            importing content into Logseq, although there are some workflows
            which have shifted over time. This content is now available on
            private YouTube playlists, which will be shared here in short time.
          </p>
        </div>
      </div>

      <div className="mt-16 p-6 rounded-lg border border-black/10 bg-surface-subtle">
        <p className="text-lg">Like what you see?</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={CHECKOUT_URL}
            className="lemonsqueezy-button inline-flex items-center px-5 py-3 rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Enroll now for full access
          </a>
          <Link
            href="/blog/free-youtube-course-logseq"
            className="inline-flex items-center px-5 py-3 rounded-md border border-black/15 hover:border-black/40 transition-colors"
          >
            Try the free YouTube course
          </Link>
        </div>
      </div>
    </section>
  );
}
