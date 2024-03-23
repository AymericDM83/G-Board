/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Syne: "Syne",
      },
      keyframes: {
        leftRight: {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(10%)" },
          "50%": { transform: "translateX(0%)" },
          "75%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(0%)" },
        },
        loader: {
          "0%": {
            transform: "translateX(-800px) rotate(-540deg)",
            opacity: "0",
          },
          "50%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "70%": { transform: "rotate(0deg)", opacity: "1" },
          "100%": { transform: "rotate(-360deg)", opacity: "0" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        leftRight: "leftRight 2s ease-out infinite",
        loader: "loader 1.2s ease-out both",
        fadeIn: "fadeIn 0.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
