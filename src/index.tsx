import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RotasApp } from "./rotas/rotasApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RotasApp />
  </React.StrictMode>,
);
