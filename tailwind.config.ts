import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#5a5a5a",
        },
        // Accent — shared across the CombiningMinds family of sites for visual
        // consistency (same value as unlocktana and combiningminds).
        accent: {
          DEFAULT: "#3f7290",
          hover: "#34607a",
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f5f5f5",
        },
        success: {
          DEFAULT: "#86ad34",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica Neue", "sans-serif"],
        serif: ["var(--font-roboto-slab)", "ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
