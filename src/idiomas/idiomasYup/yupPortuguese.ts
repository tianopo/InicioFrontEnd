/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupPortugueseLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} inválido",
    email: "${path} é um email inválido",
    length: "${path} tem ${length} caracteres?",
    lowercase: "${path} está em maiúsculo?",
    uppercase: "${path} está em minúsculo?",
    min: ({ min, path }) =>
      `${path} deve ter no mínimo ${min} ${min === 1 ? "caractere" : "caracteres"}`,
    max: ({ max, path }) =>
      `${path} deve ter no máximo ${max} ${max === 1 ? "caractere" : "caracteres"}`,
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
      let msg = `${path} é um \`${type}\`, ` + `mas o valor final foi: \`${value}\`.`;
      if (isCast) {
        msg += ` O valor original é \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} não é indefinido",
    notOneOf: "${path} não é um dos seguintes valores: ${values}",
  },
};
