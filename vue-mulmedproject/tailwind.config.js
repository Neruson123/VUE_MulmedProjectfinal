/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode switching

  content: [
    "./index.html", // Scan the root HTML file for Tailwind classes
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Scan all source files inside 'src' for styling classes
  ],

  theme: {
    extend: {}, // Area to customize or add custom design systems (colors, spacing, etc.)
  },

  plugins: [], // Area to inject extra third-party Tailwind plugins
}