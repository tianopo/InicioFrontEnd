import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { useTema } from "src/hooks";
import { Flex } from "../Flex/Flex";
import { CX } from "../Tags/ConteudoX";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  const { tema } = useTema();
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`layout.${t}`);

  const nav = [
    { texto: t("inicio"), rota: "#" },
    { texto: t("cards"), rota: "#card1" },
    { texto: t("duvidas"), rota: "#duvidas" },
    { texto: t("cards"), rota: "#card2" },
    { texto: t("contato"), rota: "#contato" },
  ];

  const icones = [
    { imagem: "/sociais/whatsapp.png", rota: "https://wa.me/5512982435638" },
    { imagem: "/sociais/github.png", rota: "https://github.com/tianopo" },
    { imagem: "/sociais/linkedin.png", rota: "https://www.linkedin.com/in/matheustianopo/" },
  ];

  return (
    <Flex className={`home-${tema}`}>
      <Sidebar
        imagem="/projeto/logo.svg"
        navbar={nav}
        titulo="Fábrica de Software"
        temaCor
        idioma
      />
      <CX tipo="div" className="">
        <Outlet />
        <Footer
          titulo="Matheus Henrique de Abreu"
          description={t("description")}
          icones={icones}
          nav={nav}
        />
      </CX>
    </Flex>
  );
};
