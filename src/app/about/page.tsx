import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About instructor",
  description:
    "I enjoy exploring the practice of personal knowledge management in the context of improving overall well-being, and using software in general to deliver operational improvements.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight">
        Hi 👋🏼 I&rsquo;m Dario, and I created Logseq Mastery to help you unlock
        its benefits fast and overcome the learning curve with ease.
      </h1>

      <div className="mt-10 space-y-6 text-lg text-ink-muted">
        <p>
          I&rsquo;m a self-taught knowledge management enthusiast who enjoys
          solving complex problems and helping others do the same.
        </p>
        <p>
          I graduated top of my class in civil engineering and started my
          career as a junior engineer before joining Bain &amp; Company as a
          business analyst. At Bain, I developed a strong strategic toolkit,
          working across industries like telecoms, mining, and financial
          services, whilst also honing my data analytics skillset.
        </p>
        <p>
          After Bain, I joined an education non-profit, where I transitioned
          into a leadership role, supporting the CEO across a range of
          functions. I introduced low-code tools to streamline data management
          and operational processes and rebuilt the organization&rsquo;s
          admissions system from the ground up.
        </p>
        <p>
          I currently consult for businesses and individuals on improving their
          systems and technical workflows. Much of my learning has been
          self-driven — from coding to marketing to systems design — and
          I&rsquo;ve packaged this into online courses to help others navigate
          today&rsquo;s dynamic, information-rich environments.
        </p>
        <p>
          You can find me on{" "}
          <a
            href="https://x.com/dariods_"
            className="underline hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/dario-da-silva-27b8604a/"
            className="underline hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , or if you&rsquo;re more interested in behind the scenes personal
          life, my blog is{" "}
          <a
            href="https://dariodasilva.blog/"
            className="underline hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            dariodasilva.blog
          </a>
          .
        </p>
      </div>

      {/* Portrait */}
      <div className="mt-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portrait.jpg"
          alt="Dario da Silva"
          className="w-full max-w-sm rounded-lg border border-black/10"
        />
      </div>

      {/* Testimonials — JS-rendered on live site, fetch came back empty */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl tracking-tight">
          Some feedback on my Logseq content
        </h2>
        <p className="mt-6 text-ink-muted italic">
          {/* TODO(dario): paste testimonial copy from the rendered live site.
              The about-page feedback block is a Systeme.io widget and did not
              come through in the WebFetch. Transcribe manually from the
              browser. */}
          TODO: about-page testimonials — copy from live site manually
        </p>
      </section>
    </article>
  );
}
