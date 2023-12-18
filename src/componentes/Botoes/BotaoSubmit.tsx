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
      botao-padrao
      botao_padrao-${tema}
      ${className}`}
    >
      {children}
    </button>
  );
};
