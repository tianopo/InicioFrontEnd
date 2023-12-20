import React, { createContext, useState } from "react";
import { LocalStorage } from "src/utils";

interface TemaContextProps {
  tema: string;
  setTema: React.Dispatch<React.SetStateAction<string>>;
}

export const TemaContext = createContext<TemaContextProps | undefined>(undefined);

export const ProvedorTema: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const localStorage = new LocalStorage();
  const temaInicial = localStorage.get("tema") || "claro";
  const [tema, setTema] = useState(temaInicial);

  return <TemaContext.Provider value={{ tema, setTema }}>{children}</TemaContext.Provider>;
};
