import React, { HTMLAttributes } from "react";
import { useLoading } from "src/hooks/useLoading";
import { CX } from "./ConteudoX";
import { SkeletonX } from "../Outros/SkeletonX";

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
  return React.createElement(
    tipo,
    { className: `texto ${className}`, ...rest },
    children,
  );
};
