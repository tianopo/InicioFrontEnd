import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import alemaoJson from "./traducoes/alemao.json";
import chinesJson from "./traducoes/chines.json";
import draconicoJson from "./traducoes/draconico.json";
import espanholJson from "./traducoes/espanhol.json";
import francesJson from "./traducoes/frances.json";
import inglesJson from "./traducoes/ingles.json";
import italianoJson from "./traducoes/italiano.json";
import japonesJson from "./traducoes/japones.json";
import ptbrJson from "./traducoes/ptbr.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ptbr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    us: inglesJson,
    fr: francesJson,
    ptbr: ptbrJson,
    de: alemaoJson,
    cn: chinesJson,
    dr: draconicoJson,
    es: espanholJson,
    it: italianoJson,
    jp: japonesJson,
  },
});

export default i18n;
