import { coresX } from "./src/configuracao/coresX";
import { medidasX } from "./src/configuracao/medidasX";

const themeExtension = {
  colors: coresX,
  fontFamily: {
    roboto: ["Roboto", "sans-serif"],
  },
  fontWeight: {
    low: "400",
    normal: "500",
    semibold: "600",
    bold: "700",
  },
  fontSize: medidasX,
  borderRadius: medidasX,
  gap: medidasX,
  padding: medidasX,
  margin: medidasX,
  iconSize: medidasX,
  lineHeight: medidasX,
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: themeExtension,
  },
  plugins: [],
};
