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
      },
      animation: {
        leftRight: "leftRight 4s linear infinite",
      },
    },
  },
  plugins: [],
};
