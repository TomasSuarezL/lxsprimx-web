const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Brice", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        amber: { 500: "#feb704" },
      },
    },
  },
  plugins: [],
};

