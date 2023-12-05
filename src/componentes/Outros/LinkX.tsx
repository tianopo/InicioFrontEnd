import React from "react";

export interface ILinkX {
  children?: React.ReactNode;
  rota?: string;
  target?: string;
}

export const LinkX = ({ rota, children, target }: ILinkX) => (
  <a
    href={rota}
    target={target}
    className="text-primaria transition duration-300 ease-in-out hover:opacity-80"
  >
    {children}
  </a>
);
