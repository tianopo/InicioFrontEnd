import { yupChineseLocale } from "src/idiomas/idiomasYup/yupChinese";
import { yupDraconicLocale } from "src/idiomas/idiomasYup/yupDraconic";
import { yupEnglishLocale } from "src/idiomas/idiomasYup/yupEnglish";
import { yupFrenchLocale } from "src/idiomas/idiomasYup/yupFrench";
import { yupGermanLocale } from "src/idiomas/idiomasYup/yupGerman";
import { yupItalianLocale } from "src/idiomas/idiomasYup/yupItalian";
import { yupJapaneseLocale } from "src/idiomas/idiomasYup/yupJapanese";
import { yupPortugueseLocale } from "src/idiomas/idiomasYup/yupPortuguese";
import { yupSpanishLocale } from "src/idiomas/idiomasYup/yupSpanish";
import * as Yup from "yup";

export const setLocaleYup = (language: string) => {
  switch (language) {
    case "us":
      Yup.setLocale(yupEnglishLocale);
      break;
    case "cn":
      Yup.setLocale(yupChineseLocale);
      break;
    case "de":
      Yup.setLocale(yupGermanLocale);
      break;
    case "dr":
      Yup.setLocale(yupDraconicLocale);
      break;
    case "es":
      Yup.setLocale(yupSpanishLocale);
      break;
    case "fr":
      Yup.setLocale(yupFrenchLocale);
      break;
    case "it":
      Yup.setLocale(yupItalianLocale);
      break;
    case "jp":
      Yup.setLocale(yupJapaneseLocale);
      break;
    default:
      Yup.setLocale(yupPortugueseLocale);
  }
};

export default Yup;
