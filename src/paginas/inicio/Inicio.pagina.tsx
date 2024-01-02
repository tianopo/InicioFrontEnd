import { SectionBanner } from "src/componentes";
import { SlideIn } from "src/componentes/Efeitos/Slide";

export const Inicio = () => {

  return (
    <SlideIn>
      <SectionBanner
        imagem="/flags/br.svg"
        titulo="Fábrica de Software"
        descricao="A fábrica de software é um centro especializado que utiliza processos industriais e metodologias ágeis para desenvolver soluções de software inovadoras e personalizadas, atendendo às necessidades específicas dos clientes."
        botao="Tente seu orçamento por aqui"
      />
    </SlideIn>
  );
};
