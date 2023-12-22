import { Outlet } from "react-router-dom"
import { useTema } from "src/hooks"
import { Flex } from "../Flex/Flex"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

export const Layout = () => {
  const { tema } = useTema();
  const nav = [{ texto: "inicio", rota: "#" }, { texto: "contatocontato", rota: "#" }, { texto: "contato", rota: "#" }, { texto: "contato", rota: "#" }, { texto: "contato", rota: "#" }]

  return (
    <Flex className={`home-${tema}`}>
      <Sidebar imagem="/flags/fr.svg" navbar={nav} titulo="Software" temaCor idioma />
      <Header imagem="/flags/fr.svg" navbar={nav} titulo="Matheus Henrique de Abreu" temaCor idioma />
      <Outlet />
    </Flex>
  )
}