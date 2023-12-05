import React from "react";

export interface ILinkXProps {
  children: React.ReactNode;
  rota: string;
}

export const LinkX = ({ rota, children }: ILinkXProps) =>
  <a href={rota}
    className="text-primaria hover:opacity-80 transition duration-300 ease-in-out"
  >{children}</a>

