const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
