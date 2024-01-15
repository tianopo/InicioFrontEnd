/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupEnglishLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} invalid",
    email: "${path} is an invalid email",
    length: "${path} has ${length} characters?",
    lowercase: "${path} is in uppercase?",
    uppercase: "${path} is in lowercase?",
    min: ({ min, path }) =>
      `${path} must have at least ${min} ${min === 1 ? "character" : "characters"}`,
    max: ({ max, path }) =>
      `${path} must have at most ${max} ${max === 1 ? "character" : "characters"}`,
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
      let msg = `${path} must be a \`${type}\`, ` + `but the final value was: \`${value}\`.`;
      if (isCast) {
        msg += ` The original value is \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} is not undefined",
    notOneOf: "${path} is not one of the following values: ${values}",
  },
};
