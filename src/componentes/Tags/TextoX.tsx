import React, { HTMLAttributes } from "react";

interface ITX extends HTMLAttributes<HTMLDivElement> {
  tipo:
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "pre"
  | "i"
  | "u"
  | "strong"
  | "em"
  | "blockquote"
  | "cite"
  | "code"
  | "q"
  | "abbr";
  children?: React.ReactNode;
}

export const TX = ({ tipo, children, className, ...rest }: ITX) => {
  return React.createElement(tipo, { className: `w-fit ${className}`, ...rest }, children);
};
