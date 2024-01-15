/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupGermanLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} ungültig",
    email: "${path} ist keine gültige E-Mail",
    length: "${path} muss ${length} Zeichen haben",
    lowercase: "${path} sollte in Kleinbuchstaben sein",
    uppercase: "${path} sollte in Großbuchstaben sein",
    min: ({ min, path }) =>
      `${path} muss mindestens ${min} ${min === 1 ? "Zeichen" : "Zeichen"} haben`,
    max: ({ max, path }) =>
      `${path} darf höchstens ${max} ${max === 1 ? "Zeichen" : "Zeichen"} haben`,
    trim: "${path} darf keine Leerzeichen enthalten",
    url: "${path} muss ein gültiges URL-Format haben",
  },
  number: {
    min: "${path} muss größer als ${min} sein",
    max: "${path} muss kleiner als ${max} sein",
    integer: "${path} muss eine ganze Zahl sein",
    lessThan: "${path} muss kleiner als ${less} sein",
    moreThan: "${path} muss größer als ${more} sein",
    negative: "${path} muss eine negative Zahl sein",
    positive: "${path} muss eine positive Zahl sein",
  },
  array: {
    min: "${path} muss mindestens ${min} Elemente haben",
    length: "${path} muss ${length} Elemente haben",
    max: "${path} darf höchstens ${max} Elemente haben",
  },
  boolean: {
    isValue: "${path} muss den gleichen Wert wie ${value} haben",
  },
  date: {
    max: "${path} muss vor dem ${max} liegen",
    min: "${path} muss nach dem ${min} liegen",
  },
  object: {
    noUnknown: "${path} hat in der Objektform nicht angegebene Schlüssel",
  },
  mixed: {
    default: "${path} ungültig",
    notNull: "${path} ist erforderlich",
    required: "${path} ist erforderlich",
    oneOf: "${path} muss einer der folgenden Werte sein: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} muss vom Typ \`${type}\` sein, ` + `aber der endgültige Wert war: \`${value}\`.`;
      if (isCast) {
        msg += ` Der ursprüngliche Wert ist \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} darf nicht undefiniert sein",
    notOneOf: "${path} darf nicht einer der folgenden Werte sein: ${values}",
  },
};
