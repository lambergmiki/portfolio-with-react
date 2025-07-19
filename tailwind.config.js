/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        "primary-white": "#fffff0",
        "secondary-red": "#5c0000",
        "background-gray": "#c7afb0",
      },
    },
  },
  plugins: [],
};
