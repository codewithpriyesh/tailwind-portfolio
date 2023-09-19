/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontSize: {
      sm: ["21.333px", "150%"],
      md: ["24px", "150%"],
      lg: ["32px", "140%"],
      xl: ["64px", "120%"],
      big: ["74.667px", "120%"],
    },
    extend: {
      screens: {
        sm: "480px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        shade: "#F5FCFF",
        primary: "#5E3BEE",
        secondary: "#1C1E53",
        headings: "#282938",
      },
      padding: {
        13: "13px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
