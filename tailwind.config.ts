import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#48280d",
          foreground: "#fff9ec",
        },
        "primary-container": "#623e21",
        surface: "#fff9ec",
        "surface-low": "#faf3e0",
        "surface-high": "#efe8d5",
        "surface-highest": "#e9e2d0",
        accent: {
          DEFAULT: "#ffe17b",
          foreground: "#1e1c10",
        },
        "accent-muted": "#c5a059",
        "on-surface": "#1e1c10",
        muted: "#6b6560",
        "muted-foreground": "#6b6560",
        "ghost-outline": "rgba(212, 195, 185, 0.15)",
        border: "rgba(212, 195, 185, 0.35)",
        input: "rgba(212, 195, 185, 0.35)",
        ring: "#48280d",
        background: "#fff9ec",
        foreground: "#1e1c10",
        card: {
          DEFAULT: "#faf3e0",
          foreground: "#1e1c10",
        },
        popover: {
          DEFAULT: "#fff9ec",
          foreground: "#1e1c10",
        },
        secondary: {
          DEFAULT: "#efe8d5",
          foreground: "#1e1c10",
        },
        destructive: {
          DEFAULT: "#b42318",
          foreground: "#fff9ec",
        },
      },
      fontFamily: {
        display: ["var(--font-noto-serif)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        ambient: "0px 20px 40px rgba(30, 28, 16, 0.06)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
