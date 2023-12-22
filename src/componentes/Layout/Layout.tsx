import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export const Layout = () => {
  const nav = [{ texto: "inicio", rota: "#" }, { texto: "contatocontato", rota: "#" }, { texto: "contato", rota: "#" }, { texto: "contato", rota: "#" }, { texto: "contato", rota: "#" }]

  return (
    <>
      <Header imagem="/flags/fr.svg" alt="Bandeira da França" navbar={nav} titulo="Matheus Henrique de Abreu" temaCor idioma />
      <Outlet />
    </>
  )
}