/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ===== EXACT brand palette, sampled from the live site =====
        // Brand PRIMARY = purple #5E2B97, Brand SECONDARY/ACTION = green #7BC950.
        ink: "#1B1E1E", // headings / dark text
        body: "#484848", // body copy
        paper: "#F9FEFE", // page background (near-white)
        cream: "#F9FEFE", // legacy alias of paper

        // Purple family (brand primary). NOTE: the `teal` family is a legacy
        // alias that points at these same purple values so existing class
        // names keep working, prefer `purple-*` in new code.
        purple: {
          DEFAULT: "#5E2B97",
          50: "#EFE1FF", // pale purple section background
          100: "#E4D3FA",
          200: "#C9A8F0",
          300: "#A87CE0",
          400: "#8455C9",
          500: "#5E2B97",
          600: "#4A1F7A",
          700: "#3A185F",
        },
        teal: {
          DEFAULT: "#5E2B97",
          50: "#EFE1FF",
          100: "#E4D3FA",
          200: "#C9A8F0",
          300: "#A87CE0",
          400: "#8455C9",
          500: "#5E2B97",
          600: "#4A1F7A",
        },

        // Green family (brand secondary / action color)
        green: {
          DEFAULT: "#7BC950",
          50: "#F1FCE8",
          100: "#E3FFD4", // pale green section background
          200: "#D8F6B8",
          300: "#A7D17A",
          400: "#8FD062",
          500: "#7BC950",
          600: "#61AE0D", // darker green (hover)
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Inter"', "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27,30,30,0.18)",
        card: "0px 20px 40px -10px rgba(0,0,0,0.25)", // matches site's button shadow
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
