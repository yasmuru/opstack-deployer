/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        source_code: ["Source Code Pro"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #FEF7F8 0%, #FFFEFF 100%)",
      },
      boxShadow: {
        "2xl": "0px 0px 24px 0px #00000008",
      },
    },
  },
  variants: {},
  plugins: [],
};
