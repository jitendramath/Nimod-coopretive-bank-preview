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
        mint: {
          100: "#e6f6f1",
          300: "#9fe3cf",
          500: "#3bbfa3",
          700: "#1f8f79",
        },
        brand: {
          main: "#f7fdfb",
          white: "#ffffff",
          glass: "rgba(255, 255, 255, 0.75)",
        },
        ui: {
          main: "#0f172a",
          soft: "#475569",
          muted: "#64748b",
        },
        border: {
          light: "rgba(15, 23, 42, 0.08)",
        },
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        hover: "0 16px 45px rgba(15, 23, 42, 0.12)",
      },
      fontFamily: {
        hind: ['var(--font-hind)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
