import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProvedorTema } from "./configuracao/TemaContext";
import "./idiomas/tradutor";
import "./index.css";
import { browserRouter } from "./rotas/rotasApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProvedorTema>
      <ToastContainer />
      <RouterProvider router={browserRouter} />
    </ProvedorTema>
  </React.StrictMode>,
);
