import { LocalStorage } from "src/utils/localStorage";

export const useTema = () => {
  const localStorage = new LocalStorage();
  const temaInicial = localStorage.get("tema") || "claro";
  const tema = (classe: string) => `${classe}-${temaInicial}`

  console.log(tema("bg-primaria"), temaInicial)
  return { tema };
};
