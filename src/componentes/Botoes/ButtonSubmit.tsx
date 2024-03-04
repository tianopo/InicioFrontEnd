// BotaoSubmit.tsx
import { HTMLAttributes, ReactNode } from "react";
import { useTheme } from "src/hooks";

interface IButtonSubmit extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
}

export const ButtonSubmit = ({ className, children, disabled }: IButtonSubmit) => {
  const { tema } = useTheme();

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
