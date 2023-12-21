import { BotaoTrocarIdioma } from "../Botoes/BotaoTrocarIdioma"
import { BotaoTrocarTema } from "../Botoes/BotaoTrocarTema"
import { FlexRow } from "../Flex/FlexRow"
import { LinkX } from "../Outros/LinkX"
import { CX } from "../Tags/ConteudoX"
import { TX } from "../Tags/TextoX"

interface IHeader {
  imagem?: string
  alt?: string
  titulo?: string
  navbar: {
    texto: string
    rota: string
  }[];
  idioma?: boolean
  tema?: boolean
}

export const Header = ({ imagem, alt, titulo, navbar, idioma, tema }: IHeader) => {

  return (
    <CX tipo="header" className={`p-12 flex flex-row justify-between bg-fundo-claro border-b-1 border-borda-claro`} >
      <FlexRow className="gap-4">
        {imagem && alt && <img src={imagem} alt={alt} className="h-12 w-10 p-2 border-1 rounded-20 border-borda-claro" />}
        {titulo && <TX tipo="h1" className="font-bold text-20">{titulo}</TX>}
      </FlexRow>
      <FlexRow className="gap-4 md:flex hidden">
        {navbar.map((nav: { texto: string, rota: string }, key: number) => (
          <LinkX key={key} rota={nav.rota}>
            <TX tipo="p" className="font-bold text-16 p-12 hover:text-primaria-claro">{nav.texto.toUpperCase()}</TX>
          </LinkX>
        ))}
      </FlexRow>
      <FlexRow className="gap-4">
        {idioma && <BotaoTrocarIdioma />}
        {tema && <BotaoTrocarTema />}
      </FlexRow>
    </CX>
  )
}
