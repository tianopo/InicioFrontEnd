import React, { HTMLAttributes } from "react";
import { LocalStorage } from "src/utils/localStorage";

interface IBotaoOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoOnClick = ({ onClick, children, className }: IBotaoOnClick) => {
  const localStorage = new LocalStorage();
  const tema = localStorage.get("tema") || "claro";
  return (
    <button
      onClick={onClick}
      className={`
        teste-${tema}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
