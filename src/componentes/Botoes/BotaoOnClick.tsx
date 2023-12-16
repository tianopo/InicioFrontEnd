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
      botao_padrao-${tema}
      w-full
      rounded-4
      border-1
      border-solid
      p-6
      font-primaria
      text-20
      font-normal
      duration-300
      ease-in-out
      hover:opacity-80
      active:translate-y-1
      md:w-28
      ${className}
      `}
    >
      {children}
    </button>
  );
};
