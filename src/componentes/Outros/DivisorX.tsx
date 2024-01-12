import { useTema } from "src/hooks/configuracao/useTema";

export const DivisorX = () => {
  const { tema } = useTema();

  return <hr className={`w-full border-1 divisor-${tema}`}></hr>;
};
