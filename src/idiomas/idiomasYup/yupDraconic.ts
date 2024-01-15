/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupDraconicLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} zalthrak",
    email: "${path} isht'nak valid E-thrul",
    length: "${path} must have ${length} draconic glyphs",
    lowercase: "${path} shrould'n't be in UPPERCASE",
    uppercase: "${path} shrould'n't be in lowercase",
    min: ({ min, path }) =>
      `${path} must have at least ${min} draconic ${min === 1 ? "glyph" : "glyphs"}`,
    max: ({ max, path }) =>
      `${path} must have at most ${max} draconic ${max === 1 ? "glyph" : "glyphs"}`,
    trim: "${path} must'n't have spaces between glyphs",
    url: "${path} must have a valid URL draconic format",
  },
  number: {
    min: "${path} must be greater than ${min}",
    max: "${path} must be less than ${max}",
    integer: "${path} must be an integer draconic number",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be more than ${more}",
    negative: "${path} must be a negative draconic number",
    positive: "${path} must be a positive draconic number",
  },
  array: {
    min: "${path} must have at least ${min} draconic items",
    length: "${path} must have ${length} draconic items",
    max: "${path} must have at most ${max} draconic items",
  },
  boolean: {
    isValue: "${path} must have the same draconic value as ${value}",
  },
  date: {
    max: "${path} must be before the draconic date ${max}",
    min: "${path} must be after the draconic date ${min}",
  },
  object: {
    noUnknown: "${path} has draconic unspecified keys in the object shape",
  },
  mixed: {
    default: "${path} isht'nak valid",
    notNull: "${path} is required draconic",
    required: "${path} is required draconic",
    oneOf: "${path} must be one of the following draconic values: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} must be a draconic \`${type}\`, ` + `but the final value was: \`${value}\`.`;
      if (isCast) {
        msg += ` The draconic original value is \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} isht'nak undefined",
    notOneOf: "${path} isht'nak one of the following draconic values: ${values}",
  },
};
