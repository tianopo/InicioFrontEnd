import { CX, Section, TX } from "src/componentes";
import { useTema } from "src/hooks";

interface ISectionDuvidas {
  id?: string;
}

export const SectionDuvidas = ({ id }: ISectionDuvidas) => {
  const { tema } = useTema();

  return (
    <Section className="px-4" id={id}>
      <TX tipo="h3" className="text-32 font-bold" style={{ textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)' }}>Dúvidas frequentes sobre a Criação de site</TX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">Quanto custa a criação de site?</TX>
        <TX tipo="p" className="duvidas_resposta">O preço do site One Page é à partir de R$99,90</TX>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">Qual a variação do preço?</TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                Descrição
              </th>
              <th scope="col" className="duvidas_th">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">Novo idioma em cada página</td>
              <td className="duvidas_td">R$30,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">Novo tema em cada página</td>
              <td className="duvidas_td">R$50,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">Nova página pedida</td>
              <td className="duvidas_td">R$70,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">Se eu pedisse um site com duas páginas e um tema, qual seria o preço?</TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                Serviço
              </th>
              <th scope="col" className="duvidas_th">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">Preço Inicial</td>
              <td className="duvidas_td">R$99,90</td>
            </tr>
            <tr>
              <td className="duvidas_td">Adição de página nova</td>
              <td className="duvidas_td">R$70,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">Tema * Duas Páginas</td>
              <td className="duvidas_td">R$100,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">Total</td>
              <td className="duvidas_td">R$269,90</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="duvidas_pergunta">Existem outros custos?</TX>
        <TX tipo="p" className="text-20 font-normal">Existem custos opcionais se contratar diretamente comigo</TX>
        <table className={`duvidas_tabela section_card-${tema}`}>
          <thead>
            <tr>
              <th scope="col" className="duvidas_th">
                Serviço
              </th>
              <th scope="col" className="duvidas_th">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="duvidas_td">Hospedagem</td>
              <td className="duvidas_td">R$10,00</td>
            </tr>
            <tr>
              <td className="duvidas_td">Dominio</td>
              <td className="duvidas_td">R$30,00 + R$10,00 mensais</td>
            </tr>
            <tr>
              <td className="duvidas_td">Pacote de Horas para Manutenção (minimo 10 horas mensais)</td>
              <td className="duvidas_td">R$10,00 hora</td>
            </tr>
            <tr>
              <td className="duvidas_td">Hospedagem + dois anos de dominio</td>
              <td className="duvidas_td">R$280,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
    </Section>
  )
}