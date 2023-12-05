import React from "react";

interface IFlexColProps {
  children?: React.ReactNode;
}

export const FlexCol = ({ children }: IFlexColProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};
