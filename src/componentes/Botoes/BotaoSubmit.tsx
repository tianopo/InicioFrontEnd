import React, { HTMLAttributes } from "react";

interface IBotaoSubmitProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}

export const BotaoSubmit = ({
  children,
  type,
  disabled,
  className,
}: IBotaoSubmitProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
    w-full
    rounded-4
    border-1
    border-solid
    border-borda
    ${disabled ? "opacity-20" : ""}
    hover:
    bg-primaria
    p-6
    text-20
    font-normal
    text-white
    duration-300
    ease-in-out${disabled ? "" : "opacity-80"}
    shadow-box-shadow
    active:translate-y-1
    md:w-28
    ${className}
`}
    >
      {children}
    </button>
  );
};
