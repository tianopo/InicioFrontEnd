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
    <footer className={`footer-${tema} footer`}>
      <Flex className="footer_flex-1 md:flex-row">
        {(titulo || description) && (
          <FlexCol className="footer_flex-2">
            <TX tipo="p" className="footer_titulo">
              {titulo}
            </TX>
            <TX tipo="p" className="text-16">
              {description}
            </TX>
          </FlexCol>
        )}
        {nav && (
          <Flex className="footer_flex-3 md:flex-col md:px-8">
            {nav?.map(({ texto, rota }, key: number) => (
              <FlexCol key={key} className="footer_flex-4 md:items-center">
                <Link to={rota} target="blank">
                  {texto}
                </Link>
              </FlexCol>
            ))}
          </Flex>
        )}
        {icones && (
          <FlexCol className="footer_flex-5 md:items-end">
            <TX tipo="p" className="footer_redes">
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
      <DivisorX />
      <TX tipo="p" className="footer_assinatura">
        © {t("direitoAutoral")} {new Date().getFullYear()}. {t("feitoPor")}{" "}
        <LinkX rota="https://github.com/tianopo" target="blank">
          tianopo
        </LinkX>
      </TX>
    </footer>
  );
};
