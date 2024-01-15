import { useTranslation } from "react-i18next";
import { CX, Section, TX } from "src/componentes";
import { useTema } from "src/hooks";

interface ISectionDuvidas {
  id?: string;
}

export const SectionDuvidas = ({ id }: ISectionDuvidas) => {
  const { tema } = useTema();
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`duvidas.${t}`);

  return (
    <Section className="px-4">
      <TX
        id={id}
        tipo="h3"
        className="text-32 font-bold"
        style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
      >
        {t("perguntasComuns")}
      </TX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">
          {t("perguntaCusto")}
        </TX>
        <TX tipo="p" className="duvidas_resposta">
          {t("respostaCusto")}
        </TX>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">
          {t("perguntaVariacao")}
        </TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh1")}
              </th>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh2")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">{t("tabelaVariacao1")}</td>
              <td className="duvidas_td">R$30,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaVariacao2")}</td>
              <td className="duvidas_td">R$50,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaVariacao3")}</td>
              <td className="duvidas_td">R$70,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">
          {t("perguntaCustoTotal")}
        </TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh1")}
              </th>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh2")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">{t("tabelaTotal1")}</td>
              <td className="duvidas_td">R$99,90</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaTotal2")}</td>
              <td className="duvidas_td">R$70,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaTotal3")}</td>
              <td className="duvidas_td">R$100,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaTotal4")}</td>
              <td className="duvidas_td">R$269,90</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">
          {t("perguntaCustoAdicional")}
        </TX>
        <TX tipo="p" className="text-20 font-normal">
          {t("respostaCustoAdicional")}
        </TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh1")}
              </th>
              <th scope="col" className="duvidas_th">
                {t("tabelaTh2")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">{t("tabelaAdicional1")}</td>
              <td className="duvidas_td">R$10,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaAdicional2")}</td>
              <td className="duvidas_td">R$30,00 + R$10,00 {t("tabelaAdicional2Mensal")}</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaAdicional3")}</td>
              <td className="duvidas_td">R$10,00 {t("tabelaAdicional3Hora")}</td>
            </tr>
            <tr>
              <td className="duvidas_td">{t("tabelaAdicional4")}</td>
              <td className="duvidas_td">R$280,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
    </Section>
  );
};
