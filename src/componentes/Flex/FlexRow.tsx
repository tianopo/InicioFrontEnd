import React, { HTMLAttributes } from "react";

interface IFlexColProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FlexCol = ({ children, className }: IFlexColProps) => {
  return <div className={`flex w-full flex-row ${className}`}> {children}</div >;
};
