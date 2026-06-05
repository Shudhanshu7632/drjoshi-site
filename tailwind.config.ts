import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A6B",
          light: "#2B52A0",
          dark: "#0F2347",
        },
        forest: {
          DEFAULT: "#2D6A4F",
          light: "#3A9E72",
          muted: "#E8F5EE",
        },
        parchment: {
          DEFAULT: "#F7F3EC",
          dark: "#EDE9E1",
          border: "#E0DAD0",
        },
        cta: {
          DEFAULT: "#2D6A4F",
          hover: "#1e4d38",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          body: "#3E3E3E",
          muted: "#7A7A7A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(48px,5vw,72px)",
          { lineHeight: "1.0", letterSpacing: "-0.01em" },
        ],
        display: ["clamp(36px,4vw,56px)", { lineHeight: "1.05" }],
        eyebrow: ["11px", { lineHeight: "1", letterSpacing: "0.15em" }],
        label: ["11px", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        site: "1280px",
      },
      spacing: {
        section: "96px",
        "section-sm": "64px",
        "section-xs": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
