import React, { HTMLAttributes, ReactNode } from "react";
import { CX } from "../Tags/ConteudoX";

interface IFlex extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Flex = ({ children, className }: IFlex) => {
  return (
    <CX tipo="div" className={`flex ${className}`}>
      {" "}
      {children}
    </CX>
  );
};
