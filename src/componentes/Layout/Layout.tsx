import { Outlet } from "react-router-dom";
import { useTema } from "src/hooks";
import { CX } from "../Tags/ConteudoX";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Flex } from "../Flex/Flex";

export const Layout = () => {
  const { tema } = useTema();
  const nav = [
    { texto: "inicio", rota: "#inicio" },
    { texto: "Cards", rota: "#card1" },
    { texto: "Dúvidas", rota: "#duvidas" },
    { texto: "Cards", rota: "#card2" },
    { texto: "contato", rota: "#contato" },
  ];
  const icones = [
    { imagem: "/sociais/whatsapp.png", rota: "https://wa.me/5512982435638" },
    { imagem: "/sociais/github.png", rota: "https://github.com/tianopo" },
    { imagem: "/sociais/linkedin.png", rota: "https://www.linkedin.com/in/matheustianopo/" },
  ];


  return (
    <Flex className={`home-${tema}`}>
      <Sidebar imagem="/projeto/logo.svg" navbar={nav} titulo="Fábrica de Software" temaCor idioma />
      <CX tipo="div" className="">
        <Outlet />
        <Footer
          titulo="Matheus Henrique de Abreu"
          description="Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos."
          icones={icones}
          nav={nav}
        />
      </CX>
    </Flex>
  );
};
