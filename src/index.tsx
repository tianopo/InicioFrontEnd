import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./configuracao/ThemeContext";
import "./index.css";
import "./language/tradutor";
import { browserRouter } from "./rotas/rotasApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastContainer />
      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  </React.StrictMode>,
);
