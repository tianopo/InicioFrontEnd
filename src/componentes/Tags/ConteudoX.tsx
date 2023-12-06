import React, { HTMLAttributes } from "react";

interface IConteudo extends HTMLAttributes<HTMLDivElement> {
  tipo: "address" | "article" | "aside" | "footer" | "header" | "main" | "section" | "div";
  children?: React.ReactNode;
}

export const ConteudoX = ({ tipo, children, className, ...rest }: IConteudo) => {
  return React.createElement(tipo, { className: `w-full ${className}`, ...rest }, children);
};
