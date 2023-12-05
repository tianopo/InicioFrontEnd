import React from "react";

interface IFlexProps {
  children?: React.ReactNode;
}

export const Flex = ({ children }: IFlexProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};
