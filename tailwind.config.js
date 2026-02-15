/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ui: {
          main: "#1d1d1f",       // Deep Charcoal (Apple-like black)
          soft: "#424245",       // Softer Text
          muted: "#86868b",      // Gray Text
          light: "#f5f5f7",      // Off White Background
        },
        premium: {
          charcoal: "#0f0f10",   // Darkest Background
          slate: "#1c1c1e",      // Card Background
          emerald: "#3AF4B7",    // Primary Accent (Glowing Green)
          forest: "#2D8A6E",     // Darker Green
          mint: "#A2F5DE",       // Light Green Highlight
          lavender: "#DFA5FF",   // Secondary Accent
        },
        border: {
          light: "rgba(0,0,0,0.1)",
          dark: "rgba(255,255,255,0.1)",
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
