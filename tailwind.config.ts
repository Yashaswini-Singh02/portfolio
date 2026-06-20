import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NLC base — near-black on bone white
        ink: "#050505",
        "ink-soft": "#111111",
        "ink-card": "#1B1B1B",
        paper: "#F1F1F1",
        "paper-dim": "#9CA3AF",
        line: "#262626",
        // NLC accents — vermilion is the one signature function-color
        accent: "#E94F0B",
        vermilion: "#E94F0B",
        lilac: "#CFB3D4",
        magenta: "#E50083",
        // aliases kept so existing utilities resolve to the new accent
        acid: "#E94F0B",
        signal: "#E50083",
        silver: "#CFB3D4",
        "silver-dim": "#9CA3AF",
        chrome: "#F1F1F1",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        pixel: ["var(--font-pixel)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "10xl": "clamp(4rem, 18vw, 22rem)",
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "chrome-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        drift: {
          "0%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(2%)" },
        },
        "drift-slow": {
          "0%": { transform: "translateX(-4%)" },
          "100%": { transform: "translateX(6%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.9" },
        },
        "sun-breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        blink: "blink 1.1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "chrome-shift": "chrome-shift 6s ease-in-out infinite",
        drift: "drift 16s ease-in-out infinite alternate",
        "drift-slow": "drift-slow 26s ease-in-out infinite alternate",
        twinkle: "twinkle 4s ease-in-out infinite",
        "sun-breathe": "sun-breathe 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
