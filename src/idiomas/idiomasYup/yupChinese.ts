/* eslint no-template-curly-in-string: "off" */
import * as Yup from "yup";

export const yupChineseLocale: Yup.LocaleObject = {
  string: {
    uuid: "${path} 无效",
    email: "${path} 不是有效的电子邮件",
    length: "${path} 长度应为 ${length} 个字符",
    lowercase: "${path} 应为小写",
    uppercase: "${path} 应为大写",
    min: ({ min, path }) => `${path} 长度应至少为 ${min} 个${min === 1 ? "字符" : "字符"}`,
    max: ({ max, path }) => `${path} 长度应最多为 ${max} 个${max === 1 ? "字符" : "字符"}`,
    trim: "${path} 不应包含空格",
    url: "${path} 应为有效的URL格式",
  },
  number: {
    min: "${path} 应大于 ${min}",
    max: "${path} 应小于 ${max}",
    integer: "${path} 应为整数",
    lessThan: "${path} 应小于 ${less}",
    moreThan: "${path} 应大于 ${more}",
    negative: "${path} 应为负数",
    positive: "${path} 应为正数",
  },
  array: {
    min: "${path} 应至少有 ${min} 个项目",
    length: "${path} 应有 ${length} 个项目",
    max: "${path} 应最多有 ${max} 个项目",
  },
  boolean: {
    isValue: "${path} 应具有与 ${value} 相同的值",
  },
  date: {
    max: "${path} 应早于 ${max}",
    min: "${path} 应晚于 ${min}",
  },
  object: {
    noUnknown: "${path} 对象形状中没有指定的键",
  },
  mixed: {
    default: "${path} 无效",
    notNull: "${path} 为必填项",
    required: "${path} 为必填项",
    oneOf: "${path} 应为以下值之一: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg = `${path} 应为 \`${type}\`, ` + `但最终值为: \`${value}\`.`;
      if (isCast) {
        msg += ` 原始值为 \`${originalValue}\`.`;
      }
      return msg;
    },
    defined: "${path} 不是未定义的",
    notOneOf: "${path} 不是以下值之一: ${values}",
  },
};
