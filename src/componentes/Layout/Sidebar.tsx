import { Article, X } from "@phosphor-icons/react";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useTema } from "src/hooks";
import { BotaoTrocarIdioma } from "../Botoes/BotaoTrocarIdioma";
import { BotaoTrocarTema } from "../Botoes/BotaoTrocarTema";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { DivisorX } from "../Outros/DivisorX";
import { LinkX } from "../Outros/LinkX";
import { TX } from "../Tags/TextoX";

interface ISidebar {
  imagem?: string;
  titulo?: string;
  navbar?: {
    texto: string;
    rota: string;
  }[];
  idioma?: boolean;
  temaCor?: boolean;
  sair?: boolean;
}

export const Sidebar = ({ imagem, titulo, navbar, idioma, temaCor, sair }: ISidebar) => {
  const { tema } = useTema();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <FlexCol
        className={`
      sidebar_bg-${tema}
      z-20
      fixed
      w-10
      items-center
      gap-3
      rounded-r-6
      border-1
      p-2
      md:hidden
      `}
      >
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className={`navbar_mobile_botao-${tema} rounded-6 border-1`}
        >
          <Article
            className={`navbar_mobile_article-${tema} h-7 w-7 font-bold`}
          />
        </button>
      </FlexCol>
      <FlexCol
        className={`
      sidebar_bg-${tema}
      ${menuAberto ? "flex w-full" : "hidden"}
      fixed
      z-20
      h-full
      items-center
      gap-3
      rounded-r-6
      border-1
      p-2
      md:flex
      md:w-52
      `}
      >
        {menuAberto && <X className="h-20 w-20 cursor-pointer self-end" onClick={() => setMenuAberto(!menuAberto)} />}
        {imagem && <img src={imagem} alt={titulo} className={`h-20 w-20`} />}
        {titulo && (
          <TX tipo="h2" className="text-center text-2xl font-bold text-white">
            {titulo}
          </TX>
        )}
        {(imagem || titulo) && <DivisorX />}
        <FlexCol className="w-full justify-start">
          {navbar &&
            navbar.map(({ texto, rota }, key) => (
              <LinkX key={key} rota={rota}>
                <TX tipo="p" className={`
                p-3
                text-16
                font-bold
                text-white
                hover:underline
                `}>
                  {texto.toUpperCase()}
                </TX>
              </LinkX>
            ))}
        </FlexCol>
        {(temaCor || idioma || sair) && (
          <FlexCol className="h-full w-full justify-end gap-3">
            <DivisorX />
            <FlexRow className="justify-between">
              {sair && (
                <FlexRow className={`
                sidebar_hover-${tema}
                cursor-pointer
                gap-1
                rounded-6`
                }>
                  <TX tipo="p">Sair</TX>
                  <SignOut size={24} />
                </FlexRow>
              )}
              {temaCor && <BotaoTrocarTema />}
              {idioma && <BotaoTrocarIdioma menuBottom />}
            </FlexRow>
          </FlexCol>
        )}
      </FlexCol>
    </>
  );
};
