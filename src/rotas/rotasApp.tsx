import { createBrowserRouter } from "react-router-dom";
import { Layout } from "src/componentes";
import { Inicio } from "src/paginas/index/Inicio";
import { Teste } from "../paginas/teste";

export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/teste", element: <Teste /> },
      { path: "/inicio", element: <Inicio /> },

      { path: "*", element: <Teste /> },
    ],
  },
]);
