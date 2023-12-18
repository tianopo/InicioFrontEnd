import React, { HTMLAttributes } from "react";

interface ICX extends HTMLAttributes<HTMLDivElement> {
  tipo: "address" | "article" | "aside" | "footer" | "header" | "main" | "section" | "div";
  children?: React.ReactNode;
}

export const CX = ({ tipo, children, className, ...rest }: ICX) => {
  return React.createElement(tipo, { className: `conteudo ${className}`, ...rest }, children);
};
