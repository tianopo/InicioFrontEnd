import { createBrowserRouter } from "react-router-dom";
import { Layout } from "src/componentes";
import { Inicio } from "src/paginas/inicio/Inicio.pagina";
import { Teste } from "src/paginas/teste.pagina";


export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/teste", element: <Teste /> },
      { path: "/inicio", element: <Inicio /> },

      { path: "*", element: <Inicio /> },
    ],
  },
]);
