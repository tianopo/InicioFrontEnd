import React, { HTMLAttributes } from "react";
import { useTema } from "src/hooks/configuracao/useTema";
import { useLoading } from "src/hooks/useLoading";
import { SkeletonX } from "../Outros/SkeletonX";

interface IBotaoOnClick extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BotaoOnClick = ({ onClick, children, className }: IBotaoOnClick) => {
  const { tema } = useTema();
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <SkeletonX className="botao" />
      ) : (
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
      )}
    </>
  );
};
