import React, { HTMLAttributes } from "react";

interface ITexto extends HTMLAttributes<HTMLDivElement> {
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

export const TextoX = ({ tipo, children, className, ...rest }: ITexto) => {
  return React.createElement(
    tipo,
    { className: `text-escrita text-20 ${className}`, ...rest },
    children,
  );
};
