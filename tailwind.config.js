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
        // आपके भेजे हुए प्रीमियम कलर्स (From image 3267.jpg)
        premium: {
          mint: "#A2F5DE",      // Light Mint
          emerald: "#3AF4B7",   // Vibrant Emerald
          forest: "#5E997E",    // Professional Deep Green
          slate: "#CCDAF0",     // Soft Blue/Slate
          lavender: "#DFA5FF",  // Elegant Purple
          charcoal: "#1d1d1f",  // Apple Dark Background
        },
        ui: {
          main: "#1d1d1f",   
          soft: "#424245",   
          muted: "#86868b", 
        },
        border: {
          light: "rgba(0,0,0,0.1)",
          white: "rgba(255,255,255,0.15)",
        }
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "sans-serif"],
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      }
    },
  },
  plugins: [],
};
