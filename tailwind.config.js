const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      lgish: ["1.125rem", "1.688rem"],
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4.5xl": ["2.25rem", "3.375rem"],
      title: ["2.5rem", "3.75rem"],
      titlexs: ["1.688rem", "2.5rem"],
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      borderRadius: {
        "2.5xl": "22px",
        mdish: "5px",
      },
      maxWidth: {
        xxxs: "10rem",
        xxs: "15rem",
        xsm: "22rem",
        "1.5xl": "40rem",
        "8xl": "87.5rem",
      },
      colors: {
        "main-col": "#09425A",
        "dark-cyan": "#007C92",
        "light-cyan": "#16C5B3",
        "gray-350": "#D0D8DA",
      },
      backgroundImage: (theme) => ({
        homepagebg: "url('/src/assets/homepagebg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
