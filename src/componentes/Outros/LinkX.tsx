import { Link } from "react-router-dom";
import { useTema } from "src/hooks/configuracao/useTema";

export interface ILinkX {
  children?: React.ReactNode;
  rota?: string;
  target?: string;
}

export const LinkX = ({ rota, children, target }: ILinkX) => {
  const { tema } = useTema();

  return (
    <Link
      to={rota!}
      target={target}
      className={`w-fit font-normal transition duration-300 ease-in-out hover:opacity-80 link-${tema}`}
    >
      {children}
    </Link>
  );
};
