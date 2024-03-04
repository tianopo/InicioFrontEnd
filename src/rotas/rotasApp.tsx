import { createBrowserRouter } from "react-router-dom";
import { Layout } from "src/componentes";
import { Home } from "src/paginas/inicio/Inicio.pagina";
import { Test } from "src/paginas/Teste.pagina";

export const browserRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/test", element: <Test /> },
      { path: "/home", element: <Home /> },

      { path: "*", element: <Home /> },
    ],
  },
]);
