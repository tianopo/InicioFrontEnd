import React, { HTMLAttributes } from "react";
import { CX } from "../Tags/ConteudoX";

interface IFlex extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Flex = ({ children, className }: IFlex) => {
  return (
    <CX tipo="div" className={`flex ${className}`}>
      {" "}
      {children}
    </CX>
  );
};
