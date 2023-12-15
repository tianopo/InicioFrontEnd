// BotaoTrocarTema.tsx
import React from "react";
import { useTema } from "src/hooks/configuracao/useTema";
import { ITema } from "src/interfaces/ITema";
import { Cloud, Moon, Star, Sun } from "@phosphor-icons/react";

export const BotaoTrocarTema = () => {
  const opcoes: { tema: keyof ITema; icone: JSX.Element }[] = [
    { tema: "claro", icone: <Sun size="20px" weight="fill" /> },
    { tema: "escuro", icone: <Moon size="20px" weight="fill" /> },
    { tema: "estrela", icone: <Star size="20px" weight="fill" /> },
    { tema: "nuvem", icone: <Cloud size="20px" weight="fill" /> },
  ];

  const { tema: temaSelecionado, setTema } = useTema();

  const alternarTema = (novoTema: keyof ITema) => {
    localStorage.setItem("tema", novoTema);
    setTema(novoTema);
  };

  return (
    <button
      type="button"
      className="
        w-10
        flex
        justify-center
        hover:rounded-6
        hover:bg-selecionado
        border-1
        p-4
        rounded-6
      "
      onClick={() => {
        const proximoTemaIndex = (opcoes.findIndex((opcao) => opcao.tema === temaSelecionado) + 1) % opcoes.length;
        alternarTema(opcoes[proximoTemaIndex].tema);
      }}
    >
      {opcoes.find((opcao) => opcao.tema === temaSelecionado)?.icone}
    </button>
  );
};
