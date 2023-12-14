import { useState } from "react";
import { BotaoOnClick } from "./BotaoOnClick";

export const TrocarTema = () => {
  const opcoes = ["claro", "escuro"];

  const obterTemaInicial = () => {
    const temaSalvo = localStorage.get("tema");
    return temaSalvo || opcoes[0];
  };

  const [temaSelecionado, setTemaSelecionado] = useState(obterTemaInicial());

  return (
    <BotaoOnClick>

    </BotaoOnClick>
  );
};
