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
      <FlexCol className={`
      sidebar_bg-${tema}
      sidebar_mobile
      `}>
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className={`
          navbar_mobile_botao-${tema}
          sidebar_mobile-botao
          `}
        >
          <Article className={`
          navbar_mobile_article-${tema}
          sidebar_mobile-icone
          `}
          />
        </button>
      </FlexCol>
      <FlexCol className={`
      sidebar_bg-${tema}
      ${menuAberto ? 'flex w-full' : 'hidden'}
      sidebar_desktop
      md:w-52 md:flex
      `}>
        {menuAberto && <X className="sidebar_x" onClick={() => setMenuAberto(!menuAberto)} />}
        {imagem && <img src={imagem} alt={titulo} className={`h-10 w-10`} />}
        {titulo && <TX tipo="h2" className="sidebar_titulo">{titulo}</TX>}
        {(imagem || titulo) && <DivisorX />}
        <FlexCol className="sidebar_flex-1">
          {navbar &&
            navbar.map((nav: { texto: string, rota: string }, key) => (
              <LinkX key={key} rota={nav.rota}>
                <TX tipo="p" className={`sidebar_navbar`}>{nav.texto.toUpperCase()}</TX>
              </LinkX>
            ))}
        </FlexCol>
        {(temaCor || idioma || sair) && (
          <FlexCol className="sidebar_flex-2">
            <DivisorX />
            <FlexRow className="justify-between">
              {sair && (
                <FlexRow className={`sidebar_hover-${tema} sidebar_flex-3`}>
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
      <CX tipo="div" className="md:w-72 w-16"></CX>
    </>
  )
}