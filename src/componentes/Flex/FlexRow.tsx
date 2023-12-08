import React, { HTMLAttributes } from "react";
import { ConteudoX } from "../Tags/ConteudoX";

interface IFlexRow extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexRow = ({ children, className }: IFlexRow) => {
  return (
    <ConteudoX
      tipo="div"
      className={`flex w-full flex-row items-center ${className}`}
    >
      {" "}
      {children}
    </ConteudoX>
  );
};
