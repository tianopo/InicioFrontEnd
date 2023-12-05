import React, { HTMLAttributes } from "react";
import { ConteudoX } from "../Tags/ConteudoX";

interface IFlexColProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexCol = ({ children, className }: IFlexColProps) => {
  return <ConteudoX tipo="div" className={`flex w-full flex-row ${className}`}> {children}</ConteudoX>;
};
