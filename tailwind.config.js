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
        // Ultra Premium Dark Theme Palette
        premium: {
          black: "#050505",      // True Black (OLED Friendly)
          charcoal: "#0f0f10",   // Main Background
          slate: "#161618",      // Secondary Background (Cards)
          border: "rgba(255, 255, 255, 0.08)", // Subtle Border
          
          // Accents (Glowing Effects)
          emerald: "#3AF4B7",    // Main Action Color (Bright Green)
          forest: "#15803d",     // Deep Green
          mint: "#A2F5DE",       // Soft Highlight
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "from": { backgroundPosition: "0 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
