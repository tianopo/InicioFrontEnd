/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";
import { pt } from "yup-locales";

export const validacaoYupPortugues: Yup.LocaleObject = {
  ...pt,
  string: {
    uuid: "${path} inválido",
    email: "${path} é um email inválido",
    length: "${path} tem ${length} caracteres?",
    lowercase: "${path} está em maiúsculo?",
    uppercase: "${path} está em minúsculo?",
    min: ({ min, path }) =>
      `${path} deve ter no mínimo ${min} ${
        min === 1 ? "caractere" : "caracteres"
      }`,
    max: ({ max, path }) =>
      `${path} deve ter no máximo ${max} ${
        max === 1 ? "caractere" : "caracteres"
      }`,
    trim: "${path} não tem espaços em branco?",
    url: "${path} tem um formato de URL válido?",
  },
  number: {
    min: "${path} é maior que ${min}?",
    max: "${path} é menor que ${max}?",
    integer: "${path} é um número inteiro?",
    lessThan: "${path} é menor que ${less}?",
    moreThan: "${path} é maior que ${more}?",
    negative: "${path} é um número negativo?",
    positive: "${path} é um número positivo?",
  },
  array: {
    min: "${path} tem no mínimo ${min} itens?",
    length: "${path} tem ${length} itens?",
    max: "${path} tem no máximo ${max} itens?",
  },
  boolean: {
    isValue: "${path} tem o mesmo valor de ${value}?",
  },
  date: {
    max: "${path} é anterior à ${max}?",
    min: "${path} é posterior à ${min}?",
  },
  object: {
    noUnknown: "${path} está sem chaves especificadas na forma do objeto",
  },
  mixed: {
    default: "${path} é inválido",
    notNull: "${path} é obrigatório",
    required: "${path} é obrigatório",
    oneOf: "${path} é um dos seguintes valores: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} é um \`${type}\`, ` + `mas o valor final foi: \`${value}\`.`;
      if (isCast) {
        msg += ` O valor original é \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} não é indefinido",
    notOneOf: "${path} não é um dos seguintes valores: ${values}",
  },
};

export const yupEnglishLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} invalid",
    email: "${path} is an invalid email",
    length: "${path} has ${length} characters?",
    lowercase: "${path} is in uppercase?",
    uppercase: "${path} is in lowercase?",
    min: ({ min, path }) =>
      `${path} must have at least ${min} ${
        min === 1 ? "character" : "characters"
      }`,
    max: ({ max, path }) =>
      `${path} must have at most ${max} ${
        max === 1 ? "character" : "characters"
      }`,
    trim: "${path} has no white spaces?",
    url: "${path} has a valid URL format?",
  },
  number: {
    min: "${path} is greater than ${min}?",
    max: "${path} is less than ${max}?",
    integer: "${path} is an integer number?",
    lessThan: "${path} is less than ${less}?",
    moreThan: "${path} is greater than ${more}?",
    negative: "${path} is a negative number?",
    positive: "${path} is a positive number?",
  },
  array: {
    min: "${path} has at least ${min} items?",
    length: "${path} has ${length} items?",
    max: "${path} has at most ${max} items?",
  },
  boolean: {
    isValue: "${path} has the same value as ${value}?",
  },
  date: {
    max: "${path} is before ${max}?",
    min: "${path} is after ${min}?",
  },
  object: {
    noUnknown: "${path} has unspecified keys in the object shape",
  },
  mixed: {
    default: "${path} is invalid",
    notNull: "${path} is required",
    required: "${path} is required",
    oneOf: "${path} must be one of the following values: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} must be a \`${type}\`, ` +
        `but the final value was: \`${value}\`.`;
      if (isCast) {
        msg += ` The original value is \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} is not undefined",
    notOneOf: "${path} is not one of the following values: ${values}",
  },
};

Yup.setLocale(validacaoYupPortugues);

export default Yup;
