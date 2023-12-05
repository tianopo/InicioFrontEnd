import React, { HTMLAttributes } from "react";

interface IConteudoProps extends HTMLAttributes<HTMLDivElement> {
  tipo:
  | "address"
  | "article"
  | "aside"
  | "footer"
  | "header"
  | "main"
  | "section"
  | "div";
  children?: React.ReactNode;
}

export const ConteudoX = ({ tipo, children, className, ...rest }: IConteudoProps) => {
  return React.createElement(tipo, { className, ...rest }, children);
};
