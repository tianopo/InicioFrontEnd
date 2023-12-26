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
    <footer className="flex h-fit w-full flex-col items-center gap-16 bg-box-shadow bg-fundo_secundario-claro px-36 py-24">
      <Flex className="w-full flex-col justify-between gap-12 p-16 text-white md:flex-row">
        <FlexCol className="w-full gap-12">
          <TX tipo="p" className="text-24 font-bold">
            {titulo}
          </TX>
          <TX tipo="p" className="text-16">
            {description}
          </TX>
        </FlexCol>
        <FlexCol className="w-full items-start md:items-end">
          <TX tipo="p" className="text-24 font-bold">
            Redes Sociais
          </TX>
          <FlexRow className="gap-12">
            {icones?.map(({ imagem, rota }, key) => (
              <LinkX rota={rota} target="blank" key={key}>
                <img src={imagem} alt="icone de rede social" className="h-6 w-6" />
              </LinkX>
            ))}
          </FlexRow>
        </FlexCol>
      </Flex>
      <DivisorX />
      <TX tipo="p" className="text-12 font-semibold text-white">
        © Copyright {new Date().getFullYear()}. Made by{" "}
        <LinkX rota="https://github.com/tianopo" target="blank">
          tianopo
        </LinkX>
      </TX>
    </footer>
  );
};
