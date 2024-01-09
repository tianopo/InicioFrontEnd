import { Section } from "../Section";

export const SectionBasica = ({ titulo, descricao, botao }: ISectionBasica) => {
  return <Section></Section>;
};

interface ISectionBasica {
  titulo?: string;
  descricao?: string;
  botao?: string;
}
