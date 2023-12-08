import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Teste } from "../paginas/teste";

export const RotasApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Teste />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
