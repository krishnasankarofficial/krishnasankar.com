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
        dark: "var(--dark)",
        light: "var(--light)",
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
        'slideUp': "slideUp 1.5s ease-in forwards",
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
        slideUp: {
          "0%": { transform: "translateY(500px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
