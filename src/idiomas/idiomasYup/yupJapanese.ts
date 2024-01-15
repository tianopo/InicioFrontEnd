/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupJapaneseLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path}が無効です",
    email: "${path}は無効なメールアドレスです",
    length: "${path}は${length}文字でなければなりません",
    lowercase: "${path}は小文字である必要があります",
    uppercase: "${path}は大文字である必要があります",
    min: ({ min, path }) => `${path}は少なくとも${min}${min === 1 ? "文字" : "文字以上"}`,
    max: ({ max, path }) => `${path}は最大${max}${max === 1 ? "文字" : "文字以下"}`,
    trim: "${path}に空白は含まれていません",
    url: "${path}は有効なURL形式である必要があります",
  },
  number: {
    min: "${path}は${min}より大きくなければなりません",
    max: "${path}は${max}より小さくなければなりません",
    integer: "${path}は整数でなければなりません",
    lessThan: "${path}は${less}より小さくなければなりません",
    moreThan: "${path}は${more}より大きくなければなりません",
    negative: "${path}は負の数でなければなりません",
    positive: "${path}は正の数でなければなりません",
  },
  array: {
    min: "${path}は少なくとも${min}アイテムを持っていなければなりません",
    length: "${path}は${length}アイテムを持っていなければなりません",
    max: "${path}は最大${max}アイテムを持っていなければなりません",
  },
  boolean: {
    isValue: "${path}は${value}と同じ値でなければなりません",
  },
  date: {
    max: "${path}は${max}より前でなければなりません",
    min: "${path}は${min}より後でなければなりません",
  },
  object: {
    noUnknown: "${path}はオブジェクトの形式で未指定のキーが含まれています",
  },
  mixed: {
    default: "${path}は無効です",
    notNull: "${path}は必須です",
    required: "${path}は必須です",
    oneOf: "${path}は次の値のいずれかでなければなりません: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg = `${path}は\`${type}\`でなければなりませんが、` + `最終値は\`${value}\`でした。`;
      if (isCast) {
        msg += ` 元の値は\`${originalValue}\`です。`;
      }
      return msg;
    },
    defined: "${path}は未定義ではありません",
    notOneOf: "${path}は次の値のいずれでもありません: ${values}",
  },
};
