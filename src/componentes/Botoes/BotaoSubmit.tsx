// BotaoSubmit.tsx
import React, { HTMLAttributes } from "react";
import { useTema } from "src/hooks/configuracao/useTema";

interface IBotaoSubmit extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const BotaoSubmit = ({ className, children, disabled }: IBotaoSubmit) => {
  const { tema } = useTema();
  console.log(`botao_padrao-${tema}`);
  return (
    <button
      disabled={disabled}
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
      ${className}`}
    >
      {children}
    </button>
  );
};
