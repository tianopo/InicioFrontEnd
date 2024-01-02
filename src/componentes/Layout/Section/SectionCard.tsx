import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick"
import { Flex } from "src/componentes/Flex/Flex"
import { FlexCol } from "src/componentes/Flex/FlexCol"
import { Section } from "../Section"

export const SectionCard = ({ titulo, descricao, botao, card }: ISectionCard) => {
  return (
    <Section className="flex gap-5">
      <div className="text-center">
        {titulo && <h1 className="text-36 font-bold mb-4 gap-5">{titulo}</h1>}
        {descricao && <p className="text-18 mb-6">{descricao}</p>}
        <BotaoOnClick className="bg-blue-500 text-white hover:bg-blue-700">
          {botao}
        </BotaoOnClick>
      </div>
      <Flex className="gap-6 flex-wrap justify-center">
        {card?.map(({ titulo, descricao, imagem }, key) => (
          <FlexCol key={key} className="bg-white w-72 h-fit p-12 items-center gap-1.5 rounded-10 shadow-xl">
            <img src={imagem} alt="foto" className="rounded-full w-16 h-16 bg-cover" />
            <h5 className="font-bold text-20">{titulo}</h5>
            <p className="text-16 text-center">
              {descricao}
            </p>
          </FlexCol>
        ))}
      </Flex>
    </Section>
  )
}

interface ISectionCard {
  titulo?: string
  descricao?: string
  botao?: string
  card?: {
    imagem: string
    titulo: string
    descricao: string
  }[]
}