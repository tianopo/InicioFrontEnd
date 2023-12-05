import React, { HTMLAttributes } from "react";
import { ConteudoX } from "../Tags/ConteudoX";

interface IFlexCol extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexCol = ({ children, className }: IFlexCol) => {
  return (
    <ConteudoX tipo="div" className={`flex w-full flex-col ${className}`}>
      {" "}
      {children}
    </ConteudoX>
  );
};
