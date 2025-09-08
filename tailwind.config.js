/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ scan all React files
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a0f1c", // deep navy background
          light: "#1a2238",   // lighter navy for cards/sections
        },
        gold: {
          DEFAULT: "#FFD700", // royal gold
          dark: "#b38f00",    // darker gold for hover/effects
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // body text
        heading: ["Poppins", "sans-serif"],         // section headings
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 215, 0, 0.6)", // gold glowing effect
      },
    },
  },
  plugins: [],
}
