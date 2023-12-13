import React, { HTMLAttributes } from "react";
import { CX } from "../Tags/ConteudoX";

interface IFlexRow extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexRow = ({ children, className }: IFlexRow) => {
  return (
    <CX tipo="div" className={`flex w-full flex-row items-center ${className}`}>
      {" "}
      {children}
    </CX>
  );
};
