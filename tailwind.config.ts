import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        work_sans: "var(--font-work-sans)",
        raleway: "var(--font-raleway)",
        sofia: "var(--font-sofia)",
      },
      animation: {
        glow: "glow 2s ease-in forwards",
        "white-to-black": "white-to-black 1s ease-in forwards",
      },
      keyframes: {
        glow: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          }
        },
        'white-to-black': {
          "0%": {
            color: "white",
          },
          "100%": {
            color: "black",
          }
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
