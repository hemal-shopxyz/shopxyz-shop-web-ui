import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {},
      borderRadius: {},
      colors: {},
      borderImage: {},
      dividerColor: {},
      keyframes: {},
      animation: {},
      fontFamily: {
        primary: ['var(--font-outfit)', 'sans-serif'],
        outfitMedium: ['var(--font-outfit)', 'sans-serif'],
        outfitSemiBold: ['var(--font-outfit)', 'sans-serif'],
        outfitBold: ['var(--font-outfit)', 'sans-serif'],
        outfitExtraBold: ['var(--font-outfit)', 'sans-serif'],
        outfitBlack: ['var(--font-outfit)', 'sans-serif'],
        outfitLight: ['var(--font-outfit)', 'sans-serif'],
        outfitThin: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
};

export default config;
