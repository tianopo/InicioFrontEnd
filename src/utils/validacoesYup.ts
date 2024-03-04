import { yupChineseLocale } from "src/language/idiomasYup/yupChinese";
import { yupDraconicLocale } from "src/language/idiomasYup/yupDraconic";
import { yupEnglishLocale } from "src/language/idiomasYup/yupEnglish";
import { yupFrenchLocale } from "src/language/idiomasYup/yupFrench";
import { yupGermanLocale } from "src/language/idiomasYup/yupGerman";
import { yupItalianLocale } from "src/language/idiomasYup/yupItalian";
import { yupJapaneseLocale } from "src/language/idiomasYup/yupJapanese";
import { yupPortugueseLocale } from "src/language/idiomasYup/yupPortuguese";
import { yupSpanishLocale } from "src/language/idiomasYup/yupSpanish";
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
