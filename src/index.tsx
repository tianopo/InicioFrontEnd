import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./componentes";
import { ProvedorTema } from "./configuracao/TemaContext";
import "./idiomas/tradutor";
import "./index.css";
import { RotasApp } from "./rotas/rotasApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProvedorTema>
      <Header imagem="/flags/fr.svg" alt="Bandeira da França" titulo="Matheus Henrique de Abreu" temaCor idioma />
      <RotasApp />
    </ProvedorTema>
  </React.StrictMode>,
);
