import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syllabus",
  description:
    "Logseq Mastery builds up your Logseq knowledge with a structured approach that you won't find in any YouTube videos.",
};

const tutorials = [
  "High-level principles of note-taking in a non-linear environment",
  "Tutorials on setting up Logseq on your computer and understanding the way the application interacts with your files.",
  "Become at home in the Logseq interface",
  "Understanding the core building blocks of Logseq as a tool: Logseq as a text editor, an outliner and a bi-directional linking tool",
  "Developing good note-taking practices in Logseq in order to effectively input, organize, and retrieve information.",
  "Exploring the extended feature set: Task management, PDF annotation, plugins and themes, spaced repetition and keyboard shortcuts",
  "Auxiliary integrations and customization",
  "Principles for maintaining a well-developed database",
];

const workflows = [
  "Walkthroughs showing how to import and structure old notes in Logseq",
  "A comprehensive framework for building a personal knowledge management system in Logseq",
  "Step-by-step guides to building your own system in Logseq",
  "Detailed breakdowns of different workflow implementations in Logseq, with commentary on the rationale behind certain design decisions.",
  "Diagrams detailing workflows and processes",
  "Resources and templates to facilitate improved writing and self-awareness practices",
];

export default function SyllabusPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
        Logseq Mastery syllabus
      </h1>

      <div className="mt-8 space-y-6 text-lg text-ink-muted">
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
        <ul className="mt-6 space-y-3 text-ink-muted list-disc pl-6">
          <li>
            <strong>Tutorials</strong> provides the point of departure.
            It&rsquo;s a step-by-step guide to becoming at home in Logseq. It
            goes into detail about developing good practices for capturing,
            organizing and retrieving your notes.
          </li>
          <li>
            <strong>Workflows</strong> is a hub of ideas and implementation
            examples. It leverages my best thinking on the topic of personal
            knowledge management to help you build your ideal workflows.
          </li>
        </ul>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-2xl tracking-tight">Part 1: Tutorials</h2>
        <ul className="mt-6 space-y-3 text-ink-muted list-disc pl-6">
          {tutorials.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl tracking-tight">Part 2: Workflows</h2>
        <ul className="mt-6 space-y-3 text-ink-muted list-disc pl-6">
          {workflows.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl tracking-tight">A note on updates</h2>
        <div className="mt-6 space-y-4 text-ink-muted">
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
      </section>

      {/* TODO(dario): syllabus outline image — unlocktana has one, but the
          live logseqmastery.com /syllabus page did not surface one in the
          WebFetch. Confirm whether one exists (JS-rendered widget?) before
          sourcing/swapping. */}
    </article>
  );
}
