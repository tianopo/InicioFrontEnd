import { useTheme } from "src/hooks/configuracao/useTema";

export const DivisorX = () => {
  const { tema } = useTheme();

  return <hr className={`w-full border-1 divisor-${tema}`}></hr>;
};
