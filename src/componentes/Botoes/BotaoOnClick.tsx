import React, { HTMLAttributes, ReactNode } from "react";
import { useTema } from "src/hooks";

interface IBotaoOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClick?: () => void;
}

export const BotaoOnClick = ({ onClick, children, className }: IBotaoOnClick) => {
  const { tema } = useTema();

  return (
    <button
      onClick={onClick}
      className={`
      botao
      botao-${tema}
      ${className}
      `}
    >
      {children}
    </button>
  );
};
