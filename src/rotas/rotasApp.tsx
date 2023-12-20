import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Teste } from "../paginas/teste";
import { Inicio } from "src/paginas/index/Inicio";

export const RotasApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teste" element={<Teste />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="*" element={<Navigate to="/teste" />} />
      </Routes>
    </BrowserRouter>
  );
};
