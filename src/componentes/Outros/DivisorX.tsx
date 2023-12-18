import { useTema } from "src/hooks/configuracao/useTema";

export const DivisorX = () => {
  const { tema } = useTema();

  return <hr className={`divisor divisor-${tema}`}></hr>;
};
