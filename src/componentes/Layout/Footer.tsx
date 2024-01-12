import { useTranslation } from "react-i18next";
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
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`footer.${t}`);

  return (
    <footer
      className={`
      footer-${tema}
      flex
      h-fit
      w-full
      flex-col
      items-center
      gap-4
      border-t-1
      shadow-xl
    `}
    >
      <Flex
        className="
        w-full
        flex-col
        justify-between
        gap-3
        p-4
        text-white
        md:flex-row
        "
      >
        {(titulo || description) && (
          <FlexCol className="w-full gap-3">
            <TX tipo="p" className="text-24 font-bold">
              {titulo}
            </TX>
            <TX tipo="p" className="text-16">
              {description}
            </TX>
          </FlexCol>
        )}
        {nav && (
          <Flex className="w-full flex-col gap-2.5 px-0 md:px-8">
            {nav?.map(({ texto, rota }, key: number) => (
              <FlexCol
                key={key}
                className="
                w-full
                items-start
                text-20
                font-semibold
                hover:underline
                md:items-center
                "
              >
                <Link to={rota}>{texto}</Link>
              </FlexCol>
            ))}
          </Flex>
        )}
        {icones && (
          <FlexCol className="w-1/2 items-start text-end md:items-end">
            <TX tipo="p" className="whitespace-nowrap text-24 font-bold">
              {t("redesSociais")}
            </TX>
            <FlexRow className="gap-3">
              {icones?.map(({ imagem, rota }, key) => (
                <LinkX rota={rota} target="blank" key={key}>
                  <img src={imagem} alt="icone de rede social" className="h-6 w-6" />
                </LinkX>
              ))}
            </FlexRow>
          </FlexCol>
        )}
      </Flex>
      <FlexCol className="w-full items-center px-5">
        <DivisorX />
        <TX tipo="p" className="text-10 font-semibold text-white">
          © {t("direitoAutoral")} {new Date().getFullYear()}. {t("feitoPor")}{" "}
          <LinkX rota="https://github.com/tianopo" target="blank">
            tianopo
          </LinkX>
        </TX>
      </FlexCol>
    </footer>
  );
};
