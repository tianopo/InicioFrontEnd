import { Flex } from "../Flex/Flex";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { DivisorX } from "../Outros/DivisorX";
import { LinkX } from "../Outros/LinkX";
import { TX } from "../Tags/TextoX";

interface IFooter {
  titulo?: string;
  description?: string;
  icones?: {
    imagem: string;
    rota: string;
  }[];
}

export const Footer = ({ titulo, description, icones }: IFooter) => {
  return (
    <footer className="w-full h-fit flex flex-col gap-12 items-center bg-fundo_secundario-claro px-36 py-24 bg-box-shadow">
      <Flex className="justify-between w-full p-16 text-white md:flex-row flex-col gap-12">
        <FlexCol className="w-full gap-12">
          <TX tipo="p" className="text-24 font-bold">{titulo}</TX>
          <TX tipo="p" className="text-16">{description}</TX>
        </FlexCol>
        <FlexCol className="md:items-end items-start w-full">
          <TX tipo="p" className="text-24 font-bold">Redes Sociais</TX>
          <FlexRow className="gap-12">
            {icones?.map(({ imagem, rota }, key) => (
              <LinkX rota={rota} target="blank" key={key}>
                <img src={imagem} alt="icone de rede social" className="w-6 h-6" />
              </LinkX>
            ))}
          </FlexRow>
        </FlexCol>
      </Flex>
      <DivisorX />
      <TX tipo="p" className="text-12 text-white font-semibold">
        © Copyright {new Date().getFullYear()}. Made by <LinkX rota="https://github.com/tianopo" target="blank">tianopo</LinkX>
      </TX>
    </footer>
  );
}