/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#0f172a",
        accent: "#38bdf8",
        dark: "#020617"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,.25)"
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#2563eb,#38bdf8,#7c3aed)"
      }
    }
  },
  plugins: []
};
