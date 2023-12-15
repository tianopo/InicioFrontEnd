import { useContext } from "react";
import { TemaContext } from "src/configuracao/TemaContext";

export const useTema = () => {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error("useTema deve ser utilizado dentro de ProvedorTema");
  }
  return context;
};
