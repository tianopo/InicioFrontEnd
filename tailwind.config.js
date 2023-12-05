/** @type {import('tailwindcss').Config} */
const medidasX = require("./src/configuracao/medidasX").medidasX;
const coresX = require("./src/configuracao/coresX").coresX;
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: coresX,
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // se tiver mais de uma fonte importada. ex: font-roboto
      },
      fontWeight: {
        low: 400,
        normal: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: medidasX,
      borderRadius: medidasX,
      gap: medidasX,
      padding: medidasX,
      margin: medidasX,
      iconSize: medidasX,
      lineHeight: medidasX,
    },
  },
  plugins: [],
};
