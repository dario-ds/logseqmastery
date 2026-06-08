import type { ReactNode } from "react";
import Link from "next/link";
import { FamewallEmbed } from "@/components/FamewallEmbed";

const CHECKOUT_URL =
  "https://combiningminds.lemonsqueezy.com/checkout/buy/7f1b558a-e380-41be-b19e-b66d36c90457?embed=1";

const painPoints = [
  {
    bold: "“Where did I put that note?”",
    body: "Your best insights vanish into the void of scattered systems — that brilliant idea now buried in meeting notes from three months ago.",
  },
  {
    bold: "Productivity paralysis from context-switching",
    body: "as you jump between apps, folders, and notebooks, losing your train of thought with each switch.",
  },
  {
    bold: "The déjà vu of recreating work",
    body: "you’re certain you’ve already done — rediscovering the same articles, rewriting the same summaries, rebuilding the same arguments.",
  },
  {
    bold: "The nagging anxiety of forgotten knowledge",
    body: "knowing you’ve captured valuable information somewhere but can’t access it when you actually need it.",
  },
  {
    bold: "Time wasted on low-value organization",
    body: "constantly reorganizing folders and notebooks without improving your ability to find what matters.",
  },
];

const outcomes = [
  {
    bold: "Build a living, interconnected knowledge system",
    body: "in Logseq that aligns with the way your brain naturally makes associations.",
  },
  {
    bold: "Take control of information overload",
    body: "and resurface what you need in an instant.",
  },
  {
    bold: "Organize your thinking",
    body: "and make major progress on your personal projects and creative outputs.",
  },
  {
    bold: "Support your life-long learning",
    body: "by building a network of integrated notes.",
  },
  {
    bold: "Create an information flywheel",
    body: "to capitalize on your prior thinking and enhance your productivity.",
  },
];

// Heroicon-style outline paths used in the "What you'll learn" cards.
const features = [
  {
    title: "Capture ideas without friction",
    body: "Stop losing valuable thoughts with quick-capture techniques that take seconds, not minutes.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Organize with purpose",
    body: "Learn the exact structure needed to create meaningful connections between notes and ideas.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  },
  {
    title: "Master Logseq’s power features",
    body: "From PDF annotation to spaced repetition, queries to whiteboards — use the full toolkit for maximum benefit.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
  {
    title: "Find exactly what you need, when you need it",
    body: "Surface the right information at precisely the right time with powerful retrieval methods.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    title: "Build a system that lasts",
    body: "Maintain and grow your knowledge base with practices that keep it valuable for years, not just months.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
];

// Institutional social-proof logos shown on the live home page, in order.
// Images downloaded by scripts/download-images.mjs to /public/images/logos/.
const logos = [
  { src: "/images/logos/oxford.png", alt: "Oxford" },
  { src: "/images/logos/microsoft.png", alt: "Microsoft" },
  { src: "/images/logos/monitor-deloitte.png", alt: "Monitor Deloitte" },
  { src: "/images/logos/cambridge.png", alt: "Cambridge" },
  { src: "/images/logos/coursera.png", alt: "Coursera" },
  { src: "/images/logos/bain.png", alt: "Bain & Company" },
  { src: "/images/logos/soas.png", alt: "SOAS" },
  { src: "/images/logos/acca.png", alt: "ACCA" },
];

const audience = [
  {
    title: "Researchers & academics",
    body: "Managing literature reviews, lecture notes, and long-running projects that demand reliable retrieval across hundreds of sources.",
  },
  {
    title: "Knowledge workers",
    body: "Drowning in meetings, documents, and context switches who need a single system that keeps everything connected.",
  },
  {
    title: "Writers & content creators",
    body: "Looking to turn scattered reading and research into a compounding library of ideas they can draw on for any project.",
  },
  {
    title: "Lifelong learners",
    body: "Who want to retain and build on what they read instead of forgetting it a week later.",
  },
  {
    title: "Logseq beginners",
    body: "Wanting to unlock the app's full potential without months of frustrating trial and error.",
  },
  {
    title: "Experienced users",
    body: "Looking to refine their system and discover features they've been overlooking.",
  },
];

const pricingBullets: { content: ReactNode }[] = [
  { content: <><strong>Once-off</strong> purchase</> },
  { content: <>More than <strong>100 in-depth video tutorials</strong></> },
  { content: <>Detailed workflow walkthroughs</> },
  { content: <>Lifetime access to everything in the course</> },
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Why buy the course rather than go through your free resources?",
    a: (
      <>
        The course offers a structured approach to learning and mastering Logseq
        from the bottom-up, so that you don&rsquo;t need to navigate through a
        bunch of different YouTube tutorials. You&rsquo;ll learn about the
        application in detail, ensuring that you don&rsquo;t miss out on any
        critical features or functionality. As the saying goes,{" "}
        <strong>&ldquo;you don&rsquo;t know, what you don&rsquo;t know&rdquo;.</strong>{" "}
        If you&rsquo;re mainly interested in the free content, take a look at
        the{" "}
        <Link
          href="/blog"
          className="text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          blog
        </Link>{" "}
        and my{" "}
        <Link
          href="/blog/best-beginner-logseq-videos"
          className="text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          best YouTube videos
        </Link>
        .
      </>
    ),
  },
  {
    q: "What is the format of the course?",
    a: "Logseq Mastery is an asynchronous, self-paced course. All of the content is available after purchasing, and you can complete the course in your own time. There is a range of resources available to you, with the primary medium of instruction being video. There is also a substantial amount of supporting text and diagrams in the course materials.",
  },
  {
    q: "How long is the course available for after purchase?",
    a: "Lifetime access. You pay once and keep full access to everything in the course — every video, walkthrough, and supporting resource. The fundamentals of building a Logseq-based knowledge system don’t go stale, and you can come back to the material whenever you hit a snag. The course is in maintenance mode (no new lessons planned), which is why it’s now a fraction of the original price.",
  },
  {
    q: "Is the course available in other languages, or are there subtitles?",
    a: "The course is only available in English.",
  },
  {
    q: "Do you offer coaching / consulting?",
    a: (
      <>
        I offer coaching and consulting separately on an hourly basis. Please
        visit{" "}
        <a
          href="https://combiningminds.org/consulting/"
          className="text-accent underline underline-offset-2 hover:text-accent-hover"
        >
          combiningminds.org/consulting
        </a>{" "}
        for booking details.
      </>
    ),
  },
  {
    q: "Do you offer refunds?",
    a: (
      <>
        <p>
          I know the frustration of buying a product and being disappointed
          with the quality. I stand by the quality of Logseq Mastery and highly
          doubt this will be your experience, but if you don&rsquo;t think that
          you&rsquo;ve received the expected value, I will gladly offer you a
          refund.
        </p>
        <p className="mt-3">
          Some folks have used Logseq Mastery in the process of deciding if
          they want to use Logseq long-term. I don&rsquo;t think this is fair,
          and I humbly request that you do not purchase this course if this is
          your intention.
        </p>
        <p className="mt-3">
          Unfortunately, I am unable to offer refunds after 30 days after
          purchase due to the limitations of payment service providers.
        </p>
      </>
    ),
  },
  {
    q: "Do you offer any discounts?",
    a: (
      <>
        <p>Yes, there are discounts available for Logseq Mastery.</p>
        <p className="mt-3">
          If you are in a country with lower purchasing power parity than the
          United States, you should see a banner at the top of your screen with
          a discount code.
        </p>
        <p className="mt-3">
          There are also student and financial needs discounts available.
        </p>
        <p className="mt-3">
          For students, get a 25% discount with the code{" "}
          <strong>STUDENT25</strong>.
        </p>
        <p className="mt-3">
          If you&rsquo;re facing financial hardship, get a 25% discount using{" "}
          <strong>FINANCE25</strong>.
        </p>
        <p className="mt-3">
          These coupons run on an honesty policy. I trust that you will do the
          right thing according to your means.
        </p>
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
            Stop taking notes, start building your{" "}
            <em className="font-serif">Second Brain</em>
          </h1>
          <p className="mt-6 text-xl text-ink-muted dark:text-zinc-400 leading-relaxed">
            Transform information overload into a database of insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CHECKOUT_URL}
              className="lemonsqueezy-button inline-flex items-center px-5 py-3 rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Enroll now
            </a>
            <Link
              href="/syllabus"
              className="inline-flex items-center px-5 py-3 rounded-md border border-black/15 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40 transition-colors"
            >
              See the syllabus
            </Link>
            <Link
              href="/blog/free-youtube-course-logseq"
              className="inline-flex items-center px-5 py-3 rounded-md border border-black/15 hover:border-black/40 dark:border-white/15 dark:hover:border-white/40 transition-colors"
            >
              Free YouTube course
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional social-proof logo strip — uniform grid so the
          logos read as a coherent set instead of free-floating images of
          wildly different aspect ratios. */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-black/10 dark:border-white/10">
        <p className="max-w-3xl text-lg text-ink-muted dark:text-zinc-400 leading-relaxed">
          Master Logseq with a proven system used by knowledge workers at
          leading institutions.{" "}
          <strong className="text-ink dark:text-zinc-100">Join over 1 000 thinkers</strong> who
          have levelled up their note-taking.
        </p>
        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8 items-center">
          {logos.map((logo) => (
            <li
              key={logo.alt}
              className="flex items-center justify-center h-16"
            >
              {/* Logos are constrained on both axes so a wide mark (e.g.
                  Coursera) doesn't dominate the row. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 md:max-h-12 max-w-[140px] w-auto object-contain dark:invert dark:opacity-70"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Pain points */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10 dark:border-white/10">
        <div className="max-w-prose">
          <p className="text-lg leading-relaxed">
            In a world of endless information, traditional note-taking
            approaches aren&rsquo;t just failing us —{" "}
            <strong>they actively hold us back.</strong>
          </p>
          <p className="mt-6 text-lg leading-relaxed">
            As we scatter our thoughts across emails, physical notebooks,
            different apps, and digital documents, we create a fragmented
            information landscape that undermines our productivity.
          </p>
        </div>

        <ul className="mt-10 grid md:grid-cols-2 gap-6">
          {painPoints.map((p) => (
            <li
              key={p.bold}
              className="p-6 rounded-lg bg-surface-subtle dark:bg-white/5 text-lg leading-relaxed"
            >
              <strong className="text-ink dark:text-zinc-100">{p.bold}</strong>{" "}
              <span className="text-ink-muted dark:text-zinc-400">{p.body}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bridge + outcomes — whole section on surface-subtle for rhythm */}
      <section className="border-t border-black/10 dark:border-white/10 bg-surface-subtle dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-prose space-y-6 text-lg leading-relaxed">
            <p>
              <strong>Managing information without a system is almost useless —</strong>{" "}
              collecting notes that never connect to form the insights that
              could transform your thinking and work. This is why thoughtful
              students and professionals are abandoning conventional
              note-taking for something more powerful: a living, interconnected
              knowledge system in Logseq that aligns with the way your brain
              naturally makes associations.
            </p>
            <p>
              But without the right approach, Logseq becomes just another app
              where information goes to die.{" "}
              <strong>Logseq Mastery bridges this gap.</strong>
            </p>
          </div>

          <ul className="mt-10 space-y-4 max-w-3xl">
            {outcomes.map((o) => (
              <li key={o.bold} className="flex items-start gap-3 text-lg leading-relaxed">
                <svg
                  className="w-6 h-6 mt-0.5 flex-shrink-0 text-accent"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 10.5l3.5 3.5L15 7" />
                </svg>
                <span>
                  <strong className="text-ink dark:text-zinc-100">{o.bold}</strong>{" "}
                  <span className="text-ink-muted dark:text-zinc-400">{o.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features — what you'll learn */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10 dark:border-white/10">
        <div className="max-w-prose space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Save yourself countless hours</strong> trying to figure it
            out for yourself and access insights not shared anywhere else.
          </p>
          <p>
            Logseq Mastery builds up your knowledge of Logseq with a structured
            approach, saving you hours of frustration trying to learn from
            scattered resources. From the very basics to an advanced level, it
            will provide{" "}
            <strong>a valuable resource for you to come back to</strong> when
            you hit snags later down the line and{" "}
            <strong>
              streamlines your learning process with text, diagrams and video.
            </strong>
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="p-8 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-lg bg-accent/10 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={f.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl leading-tight">
                  {f.title}
                </h3>
              </div>
              <p className="mt-4 text-ink-muted dark:text-zinc-400 leading-relaxed">{f.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-prose text-lg leading-relaxed">
          Get access to a wealth of resources to smooth your path to success on
          your personal knowledge management journey.{" "}
          <strong>
            Have a look at{" "}
            <Link
              href="/syllabus"
              className="text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              the syllabus
            </Link>{" "}
            for more information.
          </strong>
        </p>
      </section>

      {/* Who is the course for */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10 dark:border-white/10">
        <h2 className="font-serif text-3xl tracking-tight">
          Who is the course for?
        </h2>

        <ul className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((a) => (
            <li
              key={a.title}
              className="p-6 rounded-lg bg-surface-subtle dark:bg-white/5"
            >
              <h3 className="font-serif text-xl">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-muted dark:text-zinc-400 leading-relaxed">
                {a.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials — JS-rendered on live site, fetch came back empty */}
      <section className="border-t border-black/10 dark:border-white/10 bg-surface-subtle dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-3xl tracking-tight">
            What existing users have said
          </h2>
          <div className="mt-10">
            <FamewallEmbed src="logseqmastery" format="grid" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-black/10 dark:border-white/10 bg-surface-subtle dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Ready to build a <em className="font-serif">Second Brain</em> that
            works as brilliantly as your first?
          </h2>

          <p className="mt-4 mx-auto max-w-xl text-base text-ink-muted dark:text-zinc-400 leading-relaxed">
            Over <strong className="text-ink dark:text-zinc-100">100 in-depth tutorials</strong>,
            detailed workflow walkthroughs, and a structured path from the
            basics to advanced mastery — yours for life.
          </p>

          <div className="relative mt-12 mx-auto max-w-md rounded-2xl bg-white dark:bg-zinc-800 shadow-xl shadow-black/[0.07] dark:shadow-none ring-1 ring-black/5 dark:ring-white/10 overflow-hidden text-left">
            <div className="h-1.5 bg-accent" />

            <div className="p-10">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-7xl font-bold leading-none tracking-tight">
                  $59
                </span>
                <span className="text-sm font-medium text-ink-muted dark:text-zinc-400">USD</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted dark:text-zinc-400">
                One-time payment &middot; Lifetime access
              </p>

              <p className="mt-6 text-base text-ink-muted dark:text-zinc-400 leading-relaxed">
                Logseq Mastery — a self-paced video course with detailed
                workflow walkthroughs.
              </p>

              <ul className="mt-6 space-y-3 text-ink dark:text-zinc-100">
                {pricingBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent"
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
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_URL}
                className="lemonsqueezy-button mt-8 inline-flex items-center justify-center w-full px-6 py-4 rounded-md bg-accent text-white hover:bg-accent-hover transition-all font-semibold text-base shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30"
              >
                Enroll now for full access
              </a>

              <p className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-muted dark:text-zinc-400">
                <svg
                  className="w-4 h-4 flex-shrink-0 text-accent"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 2.5l6.5 2.25v5.25c0 4-2.8 6.5-6.5 7.5-3.7-1-6.5-3.5-6.5-7.5V4.75L10 2.5z" />
                  <path d="M7.25 10.25l2 2 3.75-4" />
                </svg>
                <span>
                  <strong className="text-ink dark:text-zinc-100">
                    Risk-free, 30-day money-back guarantee
                  </strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-black/10 dark:border-white/10">
        <h2 className="font-serif text-3xl tracking-tight">
          Frequently asked questions
        </h2>

        <div className="mt-10 divide-y divide-black/10 dark:divide-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-medium text-lg">{f.q}</span>
                <span className="mt-1 text-ink-muted dark:text-zinc-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 text-ink-muted dark:text-zinc-400 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>

        <p className="mt-10 text-ink-muted dark:text-zinc-400">
          If you have more questions, please send me an email at{" "}
          <span className="font-medium">
            dario &lsquo;at&rsquo; combiningminds &lsquo;dot&rsquo; org
          </span>{" "}
          🙏🏼
        </p>
      </section>

    </>
  );
}
