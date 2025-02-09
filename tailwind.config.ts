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
        anthony: "var(--font-anthony)",
        sofia: "var(--font-sofia)",
      },
      animation: {
        'scale_n_glow': "scale_n_glow 2s ease-in-out forwards",
        'white_to_black': "white_to_black 4.5s ease-in-out forwards",
      },
      keyframes: {
        scale_n_glow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        white_to_black: {
          "0%": { color: 'black' },
          "100%": { color: 'black' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
