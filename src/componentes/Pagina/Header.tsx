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
  alt?: string;
  titulo?: string;
  navbar?: {
    texto: string;
    rota: string;
  }[];
  idioma?: boolean;
  temaCor?: boolean;
}

export const Header = ({ imagem, alt, titulo, navbar, idioma, temaCor }: IHeader) => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { tema } = useTema();

  return (
    <CX tipo="header" className={`header header-${tema}`}>
      <FlexRow className="header_flex">
        {imagem && alt && <img src={imagem} alt={alt} className={`header_imagem header_imagem-${tema}`} />}
        {titulo && <TX tipo="h1" className="font-bold text-20">{titulo}</TX>}
      </FlexRow>
      {navbar && (
        <>
          <FlexRow className={`header_flex md:flex hidden`}>
            {navbar.map((nav: { texto: string, rota: string }, key: number) => (
              <LinkX key={key} rota={nav.rota}>
                <TX tipo="p" className="font-bold text-16 p-12 hover:text-primaria-claro">{nav.texto.toUpperCase()}</TX>
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
                className="border-1 rounded-6 border-borda-claro hover:bg-hover-claro"
              >
                <Article className="text-borda-claro w-7 h-7 font-bold" />
              </button>
              {menuAberto && (
                <div className="absolute w-auto duration-300 right-0 bg-white rounded-6">
                  {navbar.map((nav: { texto: string, rota: string }, key: number) => (
                    <div key={key} className="hover:bg-fundo-claro">
                      <LinkX rota={nav.rota}>
                        <TX tipo="p" className="font-bold text-16 p-12">{nav.texto.toUpperCase()}</TX>
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
  );
};
