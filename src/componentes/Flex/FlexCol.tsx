import React, { HTMLAttributes } from "react";
import { CX } from "../Tags/ConteudoX";

interface IFlexCol extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexCol = ({ children, className }: IFlexCol) => {
  return (
    <CX tipo="div" className={`flex flex-col ${className}`}>
      {" "}
      {children}
    </CX>
  );
};
