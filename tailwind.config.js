const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
