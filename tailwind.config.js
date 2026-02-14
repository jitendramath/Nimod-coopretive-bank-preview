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
        brand: {
          main: "#f5f5f7",     
          white: "#ffffff",    
        },
        ui: {
          main: "#1d1d1f",   
          soft: "#424245",   
          muted: "#86868b", 
        },
        border: {
          light: "#d2d2d7", 
        },
        mint: {
          100: "#e6f4ea",
          300: "#a8dab5",
          500: "#34a853", 
          700: "#2c8c45", 
        }
      },
      fontFamily: {
        sans: [
          "-apple-system", 
          "BlinkMacSystemFont", 
          '"Segoe UI"', 
          "Roboto", 
          "Helvetica", 
          "Arial", 
          "sans-serif"
        ],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        hover: "0 20px 40px -6px rgba(0, 0, 0, 0.08)",
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      }
    },
  },
  plugins: [],
};
