/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #FEF7F8 0%, #FFFEFF 100%)',
      },
    },
  },
  variants: {},
  plugins: [],

}