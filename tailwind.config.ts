import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#1A1A1A",
          mid: "#2A2A2A",
        },
        mist: {
          DEFAULT: "#FFFFFF",
          muted: "#D1D1D1",
          dim: "#9A9A9A",
        },
        brand: {
          DEFAULT: "#E30613",
          dark: "#B80510",
          soft: "rgba(227, 6, 19, 0.08)",
        },
        paper: {
          DEFAULT: "#F3F3F3",
          card: "#FFFFFF",
        },
        stone: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
        },
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      boxShadow: {
        mega: "0 4px 6px rgba(0,0,0,0.07), 0 12px 28px rgba(0,0,0,0.18), 0 24px 48px rgba(0,0,0,0.22)",
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
