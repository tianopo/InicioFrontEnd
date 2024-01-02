import { PlusCircle } from "@phosphor-icons/react"
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick"
import { Flex } from "src/componentes/Flex/Flex"
import { FlexCol } from "src/componentes/Flex/FlexCol"
import { Section } from "../Section"

export const SectionCard = ({ titulo, descricao, botao, card }: ISectionCard) => {
  return (
    <Section>
      <div className="text-center pb-6">
        {titulo && <h1 className="text-36 font-bold mb-4 gap-5">{titulo}</h1>}
        {descricao && <p className="text-18 mb-6">{descricao}</p>}
        {botao &&
          <BotaoOnClick className="bg-blue-500 text-white hover:bg-blue-700">
            {botao}
          </BotaoOnClick>
        }
      </div>
      <Flex className="gap-6 flex-wrap justify-center">
        {card?.map(({ titulo, descricao, imagem, botao = false }, key) => (
          <FlexCol key={key} className="bg-white w-72 h-fit p-3 items-center gap-1.5 rounded-10 shadow-xl">
            {imagem && <img src={imagem} alt={titulo} className="rounded-full w-16 h-16 bg-cover" />}
            {titulo && <h5 className="font-bold text-20">{titulo}</h5>}
            {descricao &&
              <p className="text-16 text-center">
                {descricao}
              </p>
            }
            {botao && <button className="hover:opacity-50"><PlusCircle size={24} /></button>}
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
    imagem?: string
    titulo?: string
    descricao?: string
    botao?: boolean
  }[]
}