import React from "react";

interface IBotaoProps {
  children: React.ReactNode;
}

export const Botao = ({ children }: IBotaoProps) => {
  return (
    <button
      className="
    rounded-sm
    border-solid
    bg-blue-500
    p-2
    font-bold
    text-white
    duration-300
    ease-in-out
    hover:bg-blue-700
"
    >
      {children}
    </button>
  );
};
