/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        "primary-white": "#fffff0", // ivory
        "secondary-white": "#FFF5EE", // seashell
        "third-white": "#F9F6EE", // bone white
        "fourth-white": "#E9DCC9", // linen
        "background-gray": "#c7afb0",
      },
      // Custom breakpoints for minimum widths
      screens: {
        'xs': '475px', // applies from 475px and up (e.g. bigger viewports than mobile screens)
        'sm': '750px' // applies from 750px and up (e.g. bigger viewports than tablet screens)
      },
    },
  },
  plugins: [],
};
