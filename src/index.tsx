import React from "react";
import ReactDOM from "react-dom/client";
import "./idiomas/tradutor";
import "./index.css";
import { RotasApp } from "./rotas/rotasApp";
import { ProvedorTema } from "./configuracao/TemaContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProvedorTema>
      <RotasApp />
    </ProvedorTema>
  </React.StrictMode>
);
