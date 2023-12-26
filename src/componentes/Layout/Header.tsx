import { Article } from '@phosphor-icons/react';
import { useState } from "react";
import { useTema } from "src/hooks";
import { BotaoTrocarIdioma } from "../Botoes/BotaoTrocarIdioma";
import { BotaoTrocarTema } from "../Botoes/BotaoTrocarTema";
import { FlexRow } from "../Flex/FlexRow";
import { LinkX } from "../Outros/LinkX";
import { CX } from "../Tags/ConteudoX";
import { TX } from "../Tags/TextoX";

interface IHeader {
  imagem?: string;
  titulo?: string;
  navbar?: {
    texto: string;
    rota: string;
  }[];
  idioma?: boolean;
  temaCor?: boolean;
}

export const Header = ({ imagem, titulo, navbar, idioma, temaCor }: IHeader) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { tema } = useTema() ?? {};

  return (
    <>
      <CX tipo="header" className={`header header-${tema}`}>
        <FlexRow className="header_flex">
          {imagem && <img src={imagem} alt={titulo} className={`header_imagem header_imagem-${tema}`} />}
          {titulo && <TX tipo="h1" className="header_titulo">{titulo}</TX>}
        </FlexRow>
        {navbar && (
          <>
            <FlexRow className={`header_flex md:flex hidden`}>
              {navbar.map((nav: { texto: string, rota: string }, key: number) => (
                <LinkX key={key} rota={nav.rota}>
                  <TX tipo="p" className="font-bold text-16 p-12">{nav.texto.toUpperCase()}</TX>
                </LinkX>
              ))}
            </FlexRow>

            <FlexRow className={`md:hidden flex items-center justify-center px-4`}>
              <CX tipo="div" className="relative inline-block w-auto duration-300 pt-3">
                <button
                  onClick={() => setMenuAberto(!menuAberto)}
                  onBlur={() =>
                    setTimeout(() => {
                      setMenuAberto(false);
                    }, 100)
                  }
                  className={`border-1 rounded-6 navbar_mobile_botao-${tema}`}
                >
                  <Article className={`w-7 h-7 font-bold navbar_mobile_article-${tema}`} />
                </button>
                {menuAberto && (
                  <div className={`absolute w-auto duration-300 right-0 rounded-6 border-1 menu_mobile-${tema}`}>
                    {navbar.map((nav: { texto: string, rota: string }, key: number) => (
                      <div key={key} className={`menu_navbar-${tema} p-8`}>
                        <LinkX rota={nav.rota}>
                          <TX tipo="p" className="navbar_texto">{nav.texto.toUpperCase()}</TX>
                        </LinkX>
                      </div>
                    ))}
                  </div>
                )}
              </CX>
            </FlexRow>
          </>
        )}
        <FlexRow className="header_flex">
          {idioma && <BotaoTrocarIdioma />}
          {temaCor && <BotaoTrocarTema />}
        </FlexRow>
      </CX>
      <CX tipo="div" className="h-20 w-full"></CX>
    </>
  );
};
