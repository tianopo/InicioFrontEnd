import { HTMLAttributes, ReactNode } from "react";
import { CX } from "src/componentes";

interface ISection extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  divisao?: number;
}
/* Consegue dividir em até dois lados por seção */
export const Section = ({ children, divisao, className }: ISection) => {
  return (
    <CX
      tipo="section"
      className={`grid w-full ${divisao ? "md:grid-cols-2 grid-cols-1" : "grid-cols-1"} gap-2 ${className}`}
    >
      {children}
    </CX>
  );
};
