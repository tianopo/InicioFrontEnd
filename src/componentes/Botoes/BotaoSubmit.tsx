// BotaoSubmit.tsx
import React, { HTMLAttributes } from "react";
import { useTema } from "src/hooks/configuracao/useTema";
import { useLoading } from "src/hooks/useLoading";
import { SkeletonX } from "../Outros/SkeletonX";

interface IBotaoSubmit extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const BotaoSubmit = ({ className, children, disabled }: IBotaoSubmit) => {
  const { tema } = useTema();
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <SkeletonX className="skeleton_botao" />
      ) : (
        <button
          disabled={disabled}
          className={`
          botao
          botao-${tema}
          ${className}`}
          >
          {children}
        </button>
      )}
    </>
  );
};
