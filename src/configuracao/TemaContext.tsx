import React, { createContext, useState } from "react";

interface TemaContextProps {
  tema: string;
  setTema: React.Dispatch<React.SetStateAction<string>>;
}

export const TemaContext = createContext<TemaContextProps | undefined>(undefined);

export const ProvedorTema: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const temaInicial = localStorage.getItem("tema") || "claro";
  const [tema, setTema] = useState(temaInicial);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
};
