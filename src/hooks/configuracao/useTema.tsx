import { useState } from "react";
import { LocalStorage } from "src/utils/localStorage";

export const useTema = () => {
  const localStorage = new LocalStorage();
  const temaInicial = localStorage.get("tema") || "claro";
  const [temaFinal, setTemaFinal] = useState(temaInicial);
  const tema = (classe: string) => `${classe}-${temaFinal}`

  console.log(tema("bg-primaria"))

  return { tema, setTemaFinal, temaFinal };
};
