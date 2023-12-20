// BotaoSubmit.tsx
import React, { HTMLAttributes } from "react";
import { useTema } from "src/hooks";

interface IBotaoSubmit extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const BotaoSubmit = ({ className, children, disabled }: IBotaoSubmit) => {
  const { tema } = useTema();

  return (
    <button
      disabled={disabled}
      className={`
        botao
        botao-${tema}
        ${className}`}
    >
      {children}
    </button>
  );
};
