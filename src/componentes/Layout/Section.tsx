import { HTMLAttributes, ReactNode } from "react";
import { CX } from "src/componentes";

interface ISection extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  divisao?: number;
}
/* Consegue dividir em até dois lados por seção */
export const Section = ({ children, divisao, className }: ISection) => {
  return (
    <CX tipo="section" className={`grid ${"grid-cols-" + divisao} gap-2 ${className}`}>
      {children}
    </CX>
  )
}