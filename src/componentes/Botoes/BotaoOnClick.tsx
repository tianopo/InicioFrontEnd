import React, { HTMLAttributes } from "react";
import { useTema } from "src/hooks/configuracao/useTema";

interface IBotaoOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoOnClick = ({ onClick, children, className }: IBotaoOnClick) => {
  const { tema } = useTema();

  return (
    <button
      onClick={onClick}
      className={`
      botao-padrao
      botao_padrao-${tema}
      ${className}
      `}
    >
      {children}
    </button>
  );
};
