import React from "react";

interface IFlexRowProps {
  children?: React.ReactNode;
}

export const FlexRow = ({ children }: IFlexRowProps) => {
  return <div className="flex w-full flex-row">{children}</div>;
};
