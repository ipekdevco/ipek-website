/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eee7ff",
          100: "#cabafb",
          200: "#a68ef3",
          300: "#8360ec",
          400: "#6033e5",
          500: "#461acc",
          600: "#3713a0",
          700: "#260d73",
          800: "#160847",
          900: "#09011d",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["Rubik", '"sans-serif"'],
      heading: ["Work Sans", '"sans-serif"'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: ["winter"],
  },
};
