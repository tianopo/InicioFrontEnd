import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "src/hooks/configuracao/useTema";

export interface ILinkX extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  rota?: string;
  target?: string;
}

export const LinkX = ({ rota, children, target }: ILinkX) => {
  const { tema } = useTheme();

  return (
    <Link
      to={rota!}
      target={target}
      className={`
      w-fit
      font-normal
      transition
      duration-300
      ease-in-out
      hover:opacity-80
      link-${tema}
      `}
    >
      {children}
    </Link>
  );
};
