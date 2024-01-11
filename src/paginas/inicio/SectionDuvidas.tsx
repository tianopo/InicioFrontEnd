import { CX, Section, TX } from "src/componentes";

interface ISectionDuvidas {
  id?: string;
}

export const SectionDuvidas = ({ id }: ISectionDuvidas) => {
  return (
    <Section className="px-4" id={id}>
      <TX tipo="h3" className="text-32 font-bold" style={{ textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)' }}>Dúvidas frequentes sobre a Criação de site</TX>
      <CX tipo="div">
        <TX tipo="p" className="text-24 font-semibold">Quanto custa a criação de site?</TX>
        <TX tipo="p" className="text-20 font-normal">O preço do site One Page é à partir de R$99,90</TX>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="text-24 font-semibold">Qual a variação do preço?</TX>
        <table className="min-w-full divide-y divide-gray-200 m-4">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Descrição
              </th>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Novo idioma em cada página</td>
              <td className="py-4 px-6 text-16 font-normal">R$30,00</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Novo tema em cada página</td>
              <td className="py-4 px-6 text-16 font-normal">R$50,00</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Nova página pedida</td>
              <td className="py-4 px-6 text-16 font-normal">R$70,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="text-24 font-semibold">Se eu pedisse um site com duas páginas e um tema, qual seria o preço?</TX>
        <table className="min-w-full divide-y divide-gray-200 m-4">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Serviço
              </th>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Preço Inicial</td>
              <td className="py-4 px-6 text-16 font-normal">R$99,90</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Adição de página nova</td>
              <td className="py-4 px-6 text-16 font-normal">R$70,00</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Tema * Duas Páginas</td>
              <td className="py-4 px-6 text-16 font-normal">R$100,00</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Total</td>
              <td className="py-4 px-6 text-16 font-normal">R$269,90</td>
            </tr>
          </tbody>
        </table>
      </CX>
      <CX tipo="div">
        <TX tipo="p" className="text-24 font-semibold">Existem outros custos?</TX>
        <TX tipo="p" className="text-20 font-normal">Existem custos opcionais se contratar diretamente comigo</TX>
        <table className="min-w-full divide-y divide-gray-200 m-4">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Serviço
              </th>
              <th scope="col" className="py-3 px-6 text-left text-20 font-normal">
                Preço
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Hospedagem</td>
              <td className="py-4 px-6 text-16 font-normal">R$10,00</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Dominio</td>
              <td className="py-4 px-6 text-16 font-normal">R$30,00 + R$10,00 mensais</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Pacote de Horas para Manutenção (minimo 10 horas mensais)</td>
              <td className="py-4 px-6 text-16 font-normal">R$10,00 hora</td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-16 font-normal">Hospedagem + dois anos de dominio</td>
              <td className="py-4 px-6 text-16 font-normal">R$280,00</td>
            </tr>
          </tbody>
        </table>
      </CX>
    </Section>
  )
}