import React, { HTMLAttributes, ReactNode } from "react";

interface ICX extends HTMLAttributes<HTMLDivElement> {
  tipo: "address" | "article" | "aside" | "footer" | "header" | "main" | "section" | "div";
  children?: ReactNode;
}

export const CX = ({ tipo, children, className, ...rest }: ICX) => {
  return React.createElement(tipo, { className: `${className}`, ...rest }, children);
};
