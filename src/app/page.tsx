import Link from "next/link";

const painPoints = [
  {
    bold: "\"Where did I put that note?\"",
    body: "Your best insights vanish into the void of scattered systems — that brilliant idea now buried in meeting notes from three months ago.",
  },
  {
    bold: "Productivity paralysis from context-switching",
    body: "as you jump between apps, folders, and notebooks, losing your train of thought with each switch.",
  },
  {
    bold: "The déjà vu of recreating work",
    body: "you're certain you've already done — rediscovering the same articles, rewriting the same summaries, rebuilding the same arguments.",
  },
  {
    bold: "The nagging anxiety of forgotten knowledge",
    body: "— knowing you've captured valuable information somewhere but can't access it when you actually need it.",
  },
  {
    bold: "Time wasted on low-value organization",
    body: "— constantly reorganizing folders and notebooks without improving your ability to find what matters.",
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

const features = [
  {
    bold: "Capture ideas without friction",
    body: "Stop losing valuable thoughts with quick-capture techniques that take seconds, not minutes.",
  },
  {
    bold: "Organize with purpose",
    body: "Learn the exact structure needed to create meaningful connections between notes and ideas.",
  },
  {
    bold: "Master Logseq's power features",
    body: "From PDF annotation to spaced repetition, queries to whiteboards — use the full toolkit for maximum benefit.",
  },
  {
    bold: "Find exactly what you need, when you need it",
    body: "Surface the right information at precisely the right time with powerful retrieval methods.",
  },
  {
    bold: "Build a system that lasts",
    body: "Maintain and grow your knowledge base with practices that keep it valuable for years, not just months.",
  },
];

// Institutional social-proof logos shown on the live site, in order.
// Images are downloaded by scripts/download-images.mjs (prompt 4) to /public/images/logos/.
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

const pricingBullets = [
  "Once-off purchase",
  "More than 100 in-depth video tutorials",
  "Detailed workflow walkthroughs",
  "Lifetime access to updates",
];

const faqs = [
  {
    q: "Why buy the course rather than go through your free resources?",
    a: (
      <>
        The course offers a structured approach to learning and mastering Logseq
        from the bottom-up, so that you don't need to navigate through a bunch
        of different YouTube tutorials. You'll learn about the application in
        detail, ensuring that you don't miss out on any critical features or
        functionality. As the saying goes,{" "}
        <strong>&ldquo;you don&rsquo;t know, what you don&rsquo;t know&rdquo;.</strong>{" "}
        If you&rsquo;re mainly interested in the free content, take a look at
        the <Link href="/blog" className="underline">blog</Link> and my{" "}
        <Link href="/blog/best-beginner-logseq-videos" className="underline">
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
    a: "The course includes lifetime access. You only have to pay once, and you'll get full access to future updates without paying anything more.",
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
          className="underline"
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
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-tight">
          Stop taking notes, start building your{" "}
          <em className="font-serif">Second Brain</em>
        </h1>
        <p className="mt-6 text-xl text-ink-muted max-w-3xl mx-auto">
          Transform information overload into a database of insights
        </p>
        <p className="mt-6 text-lg text-ink-muted max-w-3xl mx-auto">
          Master Logseq with a proven system used by knowledge workers at
          leading institutions. <strong>Join over 1 000 thinkers</strong>{" "}
          who&rsquo;ve levelled up their note-taking.
        </p>
      </section>

      {/* Institutional social-proof logo strip */}
      <section className="mx-auto max-w-6xl px-6 py-10 border-t border-black/10">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {logos.map((logo) => (
            <li key={logo.alt}>
              {/* Using <img> rather than next/image so missing files don't
                  fail the build before scripts/download-images.mjs has run. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Pain points */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <p className="text-lg text-ink-muted max-w-3xl">
          In a world of endless information, traditional note-taking approaches
          aren&rsquo;t just failing us —{" "}
          <strong>they actively hold us back.</strong>
        </p>
        <p className="mt-4 text-lg text-ink-muted max-w-3xl">
          As we scatter our thoughts across emails, physical notebooks,
          different apps, and digital documents, we create a fragmented
          information landscape that undermines our productivity.
        </p>
        <ul className="mt-10 space-y-5">
          {painPoints.map((p) => (
            <li
              key={p.bold}
              className="rounded-lg bg-surface-subtle border border-black/10 p-5 text-ink-muted"
            >
              <strong className="text-ink">{p.bold}</strong> {p.body}
            </li>
          ))}
        </ul>
      </section>

      {/* Bridge + outcomes */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <p className="text-lg text-ink-muted max-w-3xl">
          <strong>Managing information without a system is almost useless —</strong>{" "}
          collecting notes that never connect to form the insights that could
          transform your thinking and work. This is why thoughtful students and
          professionals are abandoning conventional note-taking for something
          more powerful: a living, interconnected knowledge system in Logseq
          that aligns with the way your brain naturally makes associations.
        </p>
        <p className="mt-4 text-lg text-ink-muted max-w-3xl">
          But without the right approach, Logseq becomes just another app where
          information goes to die. <strong>Logseq Mastery bridges this gap.</strong>
        </p>
        <ul className="mt-10 space-y-4 text-ink-muted">
          {outcomes.map((o) => (
            <li key={o.bold}>
              <strong className="text-ink">{o.bold}</strong> {o.body}
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <p className="text-lg text-ink-muted max-w-3xl">
          <strong>Save yourself countless hours</strong> trying to figure it out
          for yourself and access insights not shared anywhere else.
        </p>
        <p className="mt-4 text-lg text-ink-muted max-w-3xl">
          Logseq Mastery builds-up your knowledge of Logseq with a structured
          approach, saving you hours of frustration trying to learn from
          scattered resources. From the very basics to an advanced level, it
          will provide{" "}
          <strong>a valuable resource for you to come back to</strong> when you
          hit snags later down the line and{" "}
          <strong>
            streamlines your learning process with text, diagrams and video.
          </strong>
        </p>
        <ul className="mt-10 space-y-4 text-ink-muted">
          {features.map((f) => (
            <li key={f.bold}>
              <strong className="text-ink">{f.bold}</strong> — {f.body}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-ink-muted max-w-3xl">
          Get access to a wealth of resources to smooth your path to success on
          your personal knowledge management journey.{" "}
          <strong>
            Have a look at{" "}
            <Link href="/syllabus" className="underline">
              the syllabus
            </Link>{" "}
            for more information.
          </strong>
        </p>
      </section>

      {/* Testimonials — JS-rendered on live site, fetch came back empty */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-black/10">
        <h2 className="font-serif text-3xl tracking-tight">
          What existing users have said
        </h2>
        <p className="mt-6 text-ink-muted italic">
          {/* TODO(dario): paste testimonial copy from the rendered live site.
              Systeme.io widget — the home-page testimonial block did not come
              through in the WebFetch and needs to be transcribed manually. */}
          TODO: testimonials block — copy from live site manually
        </p>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-black/10 text-center">
        <p className="text-xl text-ink-muted">
          Ready to build a <em>Second Brain</em> that{" "}
          <strong>works as brilliantly as your first?</strong>
        </p>
        <h2 className="mt-4 font-serif text-4xl tracking-tight">
          Logseq Mastery
        </h2>
        <p className="mt-6 text-3xl">
          <span className="font-semibold">$80</span>{" "}
          <span className="text-ink-muted line-through text-2xl">$149</span>
        </p>
        <ul className="mt-8 space-y-3 text-ink-muted text-left max-w-md mx-auto">
          {pricingBullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="text-success mt-1">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <a
          href="https://combiningminds.lemonsqueezy.com/checkout/buy/7f1b558a-e380-41be-b19e-b66d36c90457?embed=1"
          className="lemonsqueezy-button mt-10 inline-block bg-accent hover:bg-accent-hover text-white font-medium px-8 py-4 rounded-lg transition-colors"
        >
          Enroll now for full access
        </a>
        <p className="mt-6 text-sm text-ink-muted">
          <strong>Risk-free purchase:</strong> Get your money back if
          you&rsquo;re not satisfied with the quality.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-black/10">
        <h2 className="font-serif text-3xl tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="font-medium text-lg">{f.q}</span>
                <span className="mt-1 text-ink-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-3 text-ink-muted">{f.a}</div>
            </details>
          ))}
        </div>
        <p className="mt-10 text-ink-muted">
          If you have more questions, please send me an email at dario
          &lsquo;at&rsquo; combiningminds &lsquo;dot&rsquo; org 🙏🏼
        </p>
      </section>

      {/* Lead-capture form — Systeme.io 5-day intro */}
      <section className="mx-auto max-w-3xl px-6 py-16 border-t border-black/10">
        <h2 className="font-serif text-3xl tracking-tight">
          Want to see more before you buy?
        </h2>
        <p className="mt-4 text-ink-muted">
          Enter your details below and you&rsquo;ll receive the introductory
          module of Logseq Mastery in your inbox over the next five days.
          There&rsquo;s no videos in this module, but it should give you a good
          taste of what&rsquo;s to come.
        </p>
        <div className="mt-8 rounded-lg border border-black/10 bg-surface-subtle p-6 text-ink-muted text-sm italic">
          {/* TODO(dario): wire up the lead-capture form integration.
              The live site uses Systeme.io for this 5-day intro sequence.
              Decide whether to mirror Systeme.io, swap to ConvertKit/Mailchimp,
              or self-host. Until then this is a non-functional placeholder. */}
          TODO: wire up form integration (Systeme.io on live site).
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          I hope it goes without saying, but I will never spam you or pass on
          your information. Saying it anyways just-in-case. Unsubscribe at any
          time.
        </p>
      </section>
    </>
  );
}
