/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupFrenchLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} invalide",
    email: "${path} n'est pas une adresse email valide",
    length: "${path} doit avoir ${length} caractères",
    lowercase: "${path} doit être en minuscules",
    uppercase: "${path} doit être en majuscules",
    min: ({ min, path }) =>
      `${path} doit avoir au moins ${min} ${min === 1 ? "caractère" : "caractères"}`,
    max: ({ max, path }) =>
      `${path} doit avoir au plus ${max} ${max === 1 ? "caractère" : "caractères"}`,
    trim: "${path} ne doit pas avoir d'espaces blancs",
    url: "${path} doit avoir un format d'URL valide",
  },
  number: {
    min: "${path} doit être supérieur à ${min}",
    max: "${path} doit être inférieur à ${max}",
    integer: "${path} doit être un nombre entier",
    lessThan: "${path} doit être inférieur à ${less}",
    moreThan: "${path} doit être supérieur à ${more}",
    negative: "${path} doit être un nombre négatif",
    positive: "${path} doit être un nombre positif",
  },
  array: {
    min: "${path} doit avoir au moins ${min} éléments",
    length: "${path} doit avoir ${length} éléments",
    max: "${path} doit avoir au plus ${max} éléments",
  },
  boolean: {
    isValue: "${path} doit avoir la même valeur que ${value}",
  },
  date: {
    max: "${path} doit être antérieur à ${max}",
    min: "${path} doit être postérieur à ${min}",
  },
  object: {
    noUnknown: "${path} a des clés non spécifiées dans la forme de l'objet",
  },
  mixed: {
    default: "${path} est invalide",
    notNull: "${path} est obligatoire",
    required: "${path} est obligatoire",
    oneOf: "${path} doit être l'une des valeurs suivantes: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} doit être de type \`${type}\`, ` + `mais la valeur finale était: \`${value}\`.`;
      if (isCast) {
        msg += ` La valeur originale est \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} n'est pas indéfini",
    notOneOf: "${path} ne doit pas être l'une des valeurs suivantes: ${values}",
  },
};
