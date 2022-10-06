const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        fuchsia: {
          ...colors.fuchsia,
          DEFAULT: "#ff00ff",
        },
        blue: {
          ...colors.blue,
          DEFAULT: "#0044ff",
        },
      },
    },
  },
  plugins: [],
};
