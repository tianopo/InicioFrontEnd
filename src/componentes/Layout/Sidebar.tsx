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
import { CX } from "../Tags/ConteudoX";
import { TX } from "../Tags/TextoX";

interface ISidebar {
  imagem?: string
  titulo?: string
  navbar?: {
    texto: string
    rota: string
  }[]
  idioma?: boolean
  temaCor?: boolean
  sair?: boolean
}

export const Sidebar = ({ imagem, titulo, navbar, idioma, temaCor, sair }: ISidebar) => {
  const { tema } = useTema();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <FlexCol className="w-10 md:hidden bg-gray-800 p-8 h-full text-escrita-escuro fixed z-20 rounded-r-6 gap-12 items-center">
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className={`border-1 rounded-6 navbar_mobile_botao-${tema}`}
        >
          <Article className={`w-7 h-7 font-bold navbar_mobile_article-${tema}`} />
        </button>
      </FlexCol>
      <FlexCol className={`md:w-52 md:flex ${menuAberto ? 'flex w-full' : 'hidden'} bg-gray-800 p-8 h-full text-escrita-escuro fixed z-20 rounded-r-6 gap-12 items-center`}>
        {menuAberto && <X className="w-20 h-20 cursor-pointer self-end" onClick={() => setMenuAberto(!menuAberto)} />}
        {imagem && <img src={imagem} alt={titulo} className={`h-10 w-10`} />}
        {titulo && <TX tipo="h2" className="text-2xl font-bold text-center">{titulo}</TX>}
        {(imagem || titulo) && <DivisorX />}
        <FlexCol className="w-full justify-start">
          {navbar &&
            navbar.map((nav: { texto: string, rota: string }, key) => (
              <LinkX key={key} rota={nav.rota}>
                <TX tipo="p" className="font-bold text-16 p-12 text-escrita-escuro">{nav.texto.toUpperCase()}</TX>
              </LinkX>
            ))}
        </FlexCol>
        {(temaCor || idioma || sair) && (
          <FlexCol className="w-full h-full justify-end gap-12">
            <DivisorX />
            <FlexRow className="justify-between">
              {sair && (
                <FlexRow className="gap-4 rounded-6 cursor-pointer hover:bg-selecionado-claro">
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
      <CX tipo="div" className="w-72"></CX>
    </>
  )
}