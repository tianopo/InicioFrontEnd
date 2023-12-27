import React, { HTMLAttributes, ReactNode } from "react";
import { CX } from "../Tags/ConteudoX";

interface IFlexRow extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const FlexRow = ({ children, className }: IFlexRow) => {
  return (
    <CX tipo="div" className={`flex flex-row items-center ${className}`}>
      {" "}
      {children}
    </CX>
  );
};
