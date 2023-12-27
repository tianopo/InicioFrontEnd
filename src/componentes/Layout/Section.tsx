import { ReactNode } from "react";
import { CX } from "src/componentes";

interface ISection {
  children?: ReactNode;
  divisao?: number;
}
/* Consegue dividir em até dois lados por seção */
export const Section = ({ children, divisao }: ISection) => {
  return (
    <CX tipo="section" className={`grid grid-cols-1 ${"md:grid-cols-" + divisao} gap-8`}>
      {children}
    </CX>
  )
}