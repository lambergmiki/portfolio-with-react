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
        "secondary-white": "#E9DCC9", // linen
        "background-gray": "#c7afb0",
      },
    },
  },
  plugins: [],
}
