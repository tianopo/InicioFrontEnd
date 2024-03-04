import { HTMLAttributes, ReactNode } from "react";
import { useTheme } from "src/hooks";

interface IButtonOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  onClick?: () => void;
}

export const ButtonOnClick = ({ onClick, children, className }: IButtonOnClick) => {
  const { tema } = useTheme();

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
