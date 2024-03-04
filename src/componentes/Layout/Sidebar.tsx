import { Article, X } from "@phosphor-icons/react";
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useTheme } from "src/hooks";
import { ButtonChangeLanguage } from "../Botoes/ButtonChangeLanguage";
import { ButtonChangeTheme } from "../Botoes/ButtonChangeTheme";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { TX } from "../Tags/TextoX";
import { DivisorX } from "../others/DivisorX";

interface INavbar {
  texto: string;
  rota: string;
}

interface ISidebar {
  imagem?: string;
  titulo?: string;
  navbar?: INavbar[];
  idioma?: boolean;
  temaCor?: boolean;
  sair?: boolean;
}

export const Sidebar = ({ imagem, titulo, navbar, idioma, temaCor, sair }: ISidebar) => {
  const { tema } = useTheme();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <FlexCol
        className={`
      sidebar_bg-${tema}
      fixed
      top-0
      z-20
      w-10
      items-center
      gap-3
      rounded-r-6
      border-1
      p-2
      `}
      >
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className={`navbar_mobile_botao-${tema} rounded-6 border-1`}
        >
          <Article className={`navbar_mobile_article-${tema} h-7 w-7 font-bold`} />
        </button>
      </FlexCol>
      <FlexCol
        className={`
      sidebar_bg-${tema}
      ${menuAberto ? "flex w-full" : "hidden"}
      fixed
      left-0
      top-0
      z-20
      h-screen
      items-center
      gap-3
      rounded-r-6
      border-1
      p-4
      md:sticky
      ${menuAberto ? "md:flex" : "hidden"}
      md:w-1/3
      `}
      >
        <X
          className="h-40 w-10 cursor-pointer self-end text-white md:absolute md:right-0 md:h-5"
          onClick={() => setMenuAberto(!menuAberto)}
        />
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
              <a
                key={key}
                href={rota}
                onClick={menuAberto ? () => setMenuAberto(!menuAberto) : undefined}
              >
                <TX
                  tipo="p"
                  className={`
                p-2
                text-16
                font-bold
                text-white
                hover:underline
                `}
                >
                  {texto.toUpperCase()}
                </TX>
              </a>
            ))}
        </FlexCol>
        {(temaCor || idioma || sair) && (
          <FlexCol className="h-full w-full justify-end gap-3">
            <DivisorX />
            <FlexRow className="justify-between">
              {sair && (
                <FlexRow
                  className={`
                sidebar_hover-${tema}
                cursor-pointer
                gap-1
                rounded-6`}
                >
                  <TX tipo="p">Sair</TX>
                  <SignOut size={24} />
                </FlexRow>
              )}
              {temaCor && <ButtonChangeTheme />}
              {idioma && <ButtonChangeLanguage menuBottom />}
            </FlexRow>
          </FlexCol>
        )}
      </FlexCol>
    </>
  );
};
