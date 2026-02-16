/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: "#050505",
          charcoal: "#0f0f10",
          slate: "#161618",
          border: "rgba(255,255,255,0.08)",
          emerald: "#3AF4B7",
          forest: "#15803d",
          mint: "#A2F5DE",
        },
      },
    },
  },
  plugins: [],
};
