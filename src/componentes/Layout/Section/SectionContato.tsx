import { Section } from "../Section"

export const SectionContato = ({ titulo, descricao, botao }: ISectionContato) => {
  return (
    <Section>

    </Section>
  )
}

interface ISectionContato {
  titulo?: string
  descricao?: string
  botao?: string
}