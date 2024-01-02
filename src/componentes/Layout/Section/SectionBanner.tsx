import { ReactNode } from "react"
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick"
import { Section } from "../Section"

export const SectionBanner = ({ children, imagem, titulo, descricao, botao }: ISectionBanner) => {
  return (
    <Section>
      <div className="relative bg-cover h-96" style={{ backgroundImage: `url('${imagem}')` }}>
        <div className="absolute inset-0 flex flex-col gap-3 justify-center items-start p-50 text-white text-center">
          {imagem && <img src="/flags/br.svg" alt='logo' className="w-12 h-8" />}
          {titulo && <h1 className="text-36 font-bold mb-4 text-justify">{titulo}</h1>}
          {descricao && <p className="text-18 mb-6 text-justify">{descricao}</p>}
          {botao &&
            <BotaoOnClick className="bg-blue-500 text-white hover:bg-blue-700">
              {botao}
            </BotaoOnClick>
          }
        </div>
        {children}
      </div>
    </Section>
  )
}

interface ISectionBanner {
  children?: ReactNode
  imagem: string
  titulo?: string
  descricao?: string
  botao?: string
}