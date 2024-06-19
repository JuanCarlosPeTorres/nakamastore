import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#13151a",
        secondary: "#13151a",
        tertiary: "#13151a",
        accent: "#13151a",
        "accent-light": "#13151a",
        "accent-dark": "#13151a",
        "accent-gradient": "#13151a",
        nakama: {
          black: "#13151a",
          white: "#FFFFFF",
          darkred: "#A52A2A",
          lightbrown: "#D2B48C",
          darkgray: "#2E2E2E",
          orange: "#FFA500",
        },
      },
    },
  },
  plugins: [],
};
