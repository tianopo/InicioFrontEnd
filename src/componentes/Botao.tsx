import React from "react";

interface IBotaoProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Botao = ({ children, onClick }: IBotaoProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    w-full
    transform-gpu
    rounded-4
    border-solid
    bg-blue-500
    p-6
    text-20
    font-normal
    text-white
    duration-300
    ease-in-out
    hover:bg-blue-700
    md:w-28
"
    >
      {children}
    </button>
  );
};
