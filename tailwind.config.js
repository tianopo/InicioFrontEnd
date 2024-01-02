import { coresX } from "./src/configuracao/coresX";
import { medidasX } from "./src/configuracao/medidasX";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: coresX,
      fontFamily: {
        primaria: ["Roboto"],
        secundaria: ["Roboto"],
        terciaria: ["Roboto"],
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
      padding: medidasX,
      margin: medidasX,
      iconSize: medidasX,
      lineHeight: medidasX,
    },
  },
  plugins: [],
};
