import { Link } from "react-router-dom";
import { useTema } from "src/hooks";
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
  nav?: {
    texto: string;
    rota: string;
  }[];
}

export const Footer = ({ titulo, description, icones, nav }: IFooter) => {
  const { tema } = useTema();

  return (
    <footer className={`footer-${tema} footer`}>
      <Flex className="md:flex-row footer_flex-1">
        {(titulo || description) &&
          <FlexCol className="w-full gap-12">
            <TX tipo="p" className="text-24 font-bold">
              {titulo}
            </TX>
            <TX tipo="p" className="text-16">
              {description}
            </TX>
          </FlexCol>
        }
        {nav &&
          <Flex className="md:px-8 md:flex-col  w-full px-0 gap-10flex-row">
            {nav?.map(({ texto, rota }, key: number) => (
              <FlexCol key={key} className="md:items-center hover:underline w-full items-start font-semibold text-20">
                <Link to={rota} target="blank">
                  {texto}
                </Link>
              </FlexCol>
            ))}
          </Flex>
        }
        {icones &&
          <FlexCol className=" w-1/2 items-start md:items-end">
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
        }
      </Flex>
      <DivisorX />
      <TX tipo="p" className="text-10 font-semibold text-white">
        © Copyright {new Date().getFullYear()}. Made by{" "}
        <LinkX rota="https://github.com/tianopo" target="blank">
          tianopo
        </LinkX>
      </TX>
    </footer>
  );
};
