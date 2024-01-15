/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupSpanishLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} inválido en el idioma de los dragones",
    email: "${path} es un correo no válido en el idioma de los dragones",
    length: "${path} debe tener ${length} glifos draconianos",
    lowercase: "${path} no debería estar en MAYÚSCULAS",
    uppercase: "${path} no debería estar en minúsculas",
    min: ({ min, path }) =>
      `${path} debe tener al menos ${min} glifos draconianos${min === 1 ? "" : "s"}`,
    max: ({ max, path }) =>
      `${path} debe tener como máximo ${max} glifos draconianos${max === 1 ? "" : "s"}`,
    trim: "${path} no debe tener espacios entre los glifos",
    url: "${path} debe tener un formato de URL válido en el idioma de los dragones",
  },
  number: {
    min: "${path} debe ser mayor que ${min} en el idioma de los dragones",
    max: "${path} debe ser menor que ${max} en el idioma de los dragones",
    integer: "${path} debe ser un número entero en el idioma de los dragones",
    lessThan: "${path} debe ser menor que ${less} en el idioma de los dragones",
    moreThan: "${path} debe ser mayor que ${more} en el idioma de los dragones",
    negative: "${path} debe ser un número negativo en el idioma de los dragones",
    positive: "${path} debe ser un número positivo en el idioma de los dragones",
  },
  array: {
    min: "${path} debe tener al menos ${min} elementos draconianos",
    length: "${path} debe tener ${length} elementos draconianos",
    max: "${path} debe tener como máximo ${max} elementos draconianos",
  },
  boolean: {
    isValue: "${path} debe tener el mismo valor draconiano que ${value}",
  },
  date: {
    max: "${path} debe ser anterior a la fecha draconiana ${max}",
    min: "${path} debe ser posterior a la fecha draconiana ${min}",
  },
  object: {
    noUnknown: "${path} tiene claves no especificadas en la forma del objeto draconiano",
  },
  mixed: {
    default: "${path} es inválido en el idioma de los dragones",
    notNull: "${path} es requerido en el idioma de los dragones",
    required: "${path} es requerido en el idioma de los dragones",
    oneOf: "${path} debe ser uno de los siguientes valores draconianos: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} debe ser un \`${type}\` draconiano, ` + `pero el valor final fue: \`${value}\`.`;
      if (isCast) {
        msg += ` El valor original es \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} no esht'nak indefinido",
    notOneOf: "${path} no esht'nak uno de los siguientes valores draconianos: ${values}",
  },
};
