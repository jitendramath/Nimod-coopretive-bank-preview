/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🌑 This enables manual toggling (The Switch)
  darkMode: "class", 
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // 🎨 The Semantic "Magic" Palette
        // These colors automatically flip based on Dark/Light mode variables
        premium: {
          bg: "var(--bg-primary)",          // Main Background
          surface: "var(--bg-secondary)",   // Cards/Sections surface
          card: "var(--card-bg)",           // Glassmorphism Cards
          
          text: "var(--text-main)",         // Main Headings
          muted: "var(--text-muted)",       // Subtitles/Paragraphs
          
          accent: "var(--accent-primary)",  // The Main "Emerald" (Neon in Dark / Jewel in Light)
          glow: "var(--accent-glow)",       // The Glow Aura color
          
          border: "var(--border-color)",    // Subtle borders
          shadow: "var(--shadow-color)",    // Dynamic Shadows
          
          // ⚠️ Keeping original hardcoded colors for specific "Always Dark" elements 
          // (Like if you want the Footer to ALWAYS remain black)
          black: "#050507",
          charcoal: "#0f0f10",
          emerald: "#3AF4B7", // Original Neon Emerald
          mint: "#A2F5DE",
        },
      },
      
      // 🚀 Hardware Accelerated Animations (Smoother on cheap phones)
      animation: {
        shimmer: "shimmer 8s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
