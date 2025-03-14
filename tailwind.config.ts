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
        primary: "var(--primary)",   // Custom primary color
        secondary: "var(--secondary)", // Custom secondary color
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%", // Makes the container full-width on small screens
          xl: "1260px",

        },
      },
      fontFamily : {
        "Primary" : ['Didact Gothic', 'serif'],
        "heroFont": ['Caudex', 'sans-serif'],
        "secondaryFont" : ["Poiret One", "sans-serif"]
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        gradientShift: "gradientShift 2s infinite alternate ease-in-out",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        gradientShift: {
          "0%": { background: "radial-gradient(ellipse at top left, #fde68a, #fab236)" },
          "100%": { background: "radial-gradient(ellipse at top right, #fab236, #fde68a)" }
        },
      },

    },
  },
  plugins: [],
} satisfies Config;
