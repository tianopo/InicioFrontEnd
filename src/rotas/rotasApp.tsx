import { Routes, Route, Navigate } from "react-router-dom";
import { Teste } from "../paginas/teste";

export const RotasApp = () => {
  return (
    <Routes>
      <Route path="/home" element={<Teste />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
