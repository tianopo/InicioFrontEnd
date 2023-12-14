import { Link } from "react-router-dom";

export interface ILinkX {
  children?: React.ReactNode;
  rota?: string;
  target?: string;
}

export const LinkX = ({ rota, children, target }: ILinkX) => (
  <Link
    to={rota!}
    target={target}
    className="w-0 font-normal text-primaria transition duration-300 ease-in-out hover:opacity-80"
  >
    {children}
  </Link>
);
