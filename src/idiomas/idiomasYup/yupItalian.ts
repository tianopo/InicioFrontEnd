/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupItalianLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} non valido",
    email: "${path} non è un indirizzo email valido",
    length: "${path} deve avere ${length} caratteri",
    lowercase: "${path} deve essere in minuscolo",
    uppercase: "${path} deve essere in maiuscolo",
    min: ({ min, path }) =>
      `${path} deve avere almeno ${min} ${min === 1 ? "carattere" : "caratteri"}`,
    max: ({ max, path }) =>
      `${path} deve avere al massimo ${max} ${max === 1 ? "carattere" : "caratteri"}`,
    trim: "${path} non deve contenere spazi bianchi",
    url: "${path} deve avere un formato URL valido",
  },
  number: {
    min: "${path} deve essere maggiore di ${min}",
    max: "${path} deve essere minore di ${max}",
    integer: "${path} deve essere un numero intero",
    lessThan: "${path} deve essere inferiore a ${less}",
    moreThan: "${path} deve essere maggiore di ${more}",
    negative: "${path} deve essere un numero negativo",
    positive: "${path} deve essere un numero positivo",
  },
  array: {
    min: "${path} deve avere almeno ${min} elementi",
    length: "${path} deve avere ${length} elementi",
    max: "${path} deve avere al massimo ${max} elementi",
  },
  boolean: {
    isValue: "${path} deve avere lo stesso valore di ${value}",
  },
  date: {
    max: "${path} deve essere precedente a ${max}",
    min: "${path} deve essere successivo a ${min}",
  },
  object: {
    noUnknown: "${path} ha chiavi non specificate nella forma dell'oggetto",
  },
  mixed: {
    default: "${path} non è valido",
    notNull: "${path} è obbligatorio",
    required: "${path} è obbligatorio",
    oneOf: "${path} deve essere uno dei seguenti valori: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} deve essere di tipo \`${type}\`, ` + `ma il valore finale era: \`${value}\`.`;
      if (isCast) {
        msg += ` Il valore originale è \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} non è indefinito",
    notOneOf: "${path} non deve essere uno dei seguenti valori: ${values}",
  },
};
