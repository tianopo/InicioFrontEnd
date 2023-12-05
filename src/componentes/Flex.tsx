import React from "react";

interface IFlexProps {
  children: React.ReactNode;
}

export const Flex = ({ children }: IFlexProps) => {
  return (
    <div className="flex h-screen flex-col items-center justify-start"></div>
  );
};
