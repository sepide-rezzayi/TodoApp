/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        // If the screen width is 640 pixels or wider, the styles defined inside the media query will be applied.

        tablet: "1024px",
        // => @media (min-width: 1024px) { ... }

        laptop: "1280px",
        // => @media (min-width: 1280px) { ... }
        desktop: "1536px",
      },
      fontFamily: {
        fontRoboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
};
