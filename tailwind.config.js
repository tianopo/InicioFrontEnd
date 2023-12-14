import { coresX } from "./src/configuracao/coresX";
import { medidasX } from "./src/configuracao/medidasX";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: coresX,
      background: coresX,
      borderColor: coresX.borda,
      boxShadow: coresX['box-shadow'],
      fontFamily: {
        primaria: ["Roboto", "sans-serif"],
        secundaria: ["Roboto", "sans-serif"],
        terciaria: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        low: "400",
        normal: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: medidasX,
      borderWidth: medidasX,
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
