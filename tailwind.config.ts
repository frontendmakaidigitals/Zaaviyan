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
        center: true,  // Centers the container by default
        padding: '2rem', // Add padding to the container
        screens: {
          sm: "100%",  // Full width on small screens
          md: "768px",  // Custom width on medium screens
          lg: "1024px", // Custom width on large screens
          xl: "1280px", // Custom width on extra-large screens
        },
      },
      fontFamily : {
        "Primary" : ['Didact Gothic', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
