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
          md: "768px",
          lg: "1024px",
          xl: "1260px",
          "2xl": "1400px", // Allows for more width on larger screens
        },
      },
      fontFamily : {
        "Primary" : ['Didact Gothic', 'serif']
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
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
      },

    },
  },
  plugins: [],
} satisfies Config;
