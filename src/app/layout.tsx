import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Logseq Mastery — Master Logseq with a proven system",
    template: "%s — Logseq Mastery",
  },
  description:
    "Learn how to use Logseq to build an integrated note-taking & personal knowledge management system. Take control of the information firehose.",
  metadataBase: new URL("https://logseqmastery.com"),
  openGraph: {
    title: "Logseq Mastery",
    description:
      "Learn how to use Logseq to build an integrated note-taking & personal knowledge management system. Take control of the information firehose.",
    url: "https://logseqmastery.com",
    siteName: "Logseq Mastery",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${robotoSlab.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Lemon Squeezy button auto-binding — picks up any element with class "lemonsqueezy-button". */}
        <Script
          src="https://assets.lemonsqueezy.com/lemon.js"
          strategy="lazyOnload"
        />
        {/* ParityDeals — purchasing-power parity banner / discount codes.
            The live site shows a PPP banner — re-enable when ready. */}
        {/* <Script
          src="https://cdn.paritydeals.com/banner.js"
          strategy="afterInteractive"
        /> */}
        {/* TODO(dario): add Google Analytics / Simple Analytics tag here if desired.
            The live site uses sa.logseqmastery.com (Simple Analytics). */}
      </body>
    </html>
  );
}
