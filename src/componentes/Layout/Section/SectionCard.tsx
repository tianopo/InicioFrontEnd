import { PlusCircle } from "@phosphor-icons/react";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { Flex } from "src/componentes/Flex/Flex";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { Section } from "../Section";

export const SectionCard = ({ id, titulo, descricao, botao, card, rota }: ISectionCard) => {
  const handleButtonClick = () => {
    window.location.href = rota || "";
  };

  return (
    <Section className="p-4" id={id}>
      <div className="pb-6 text-center">
        {titulo && <h1 className="mb-4 gap-5 text-36 font-bold">{titulo}</h1>}
        {descricao && <p className="mb-6 text-18 text-ellipsis overflow-hidden whitespace-break-spaces">{descricao}</p>}
        {botao && rota && (
          <BotaoOnClick className="bg-blue-500 text-white hover:bg-blue-700" onClick={handleButtonClick}>{botao}</BotaoOnClick>
        )}
      </div>
      <Flex className="flex-wrap justify-center gap-6">
        {card?.map(({ titulo, descricao, imagem, botao = false }, key) => (
          <FlexCol
            key={key}
            className="h-fit w-72 items-center gap-1.5 rounded-10 bg-white p-3 shadow-xl"
          >
            {imagem && (
              <img src={imagem} alt={titulo} className="h-16 w-16 rounded-full bg-cover" />
            )}
            {titulo && <h5 className="text-20 font-bold">{titulo}</h5>}
            {descricao && <p className="text-center text-16">{descricao}</p>}
            {botao && (
              <button className="hover:opacity-50">
                <PlusCircle size={24} />
              </button>
            )}
          </FlexCol>
        ))}
      </Flex>
    </Section>
  );
};

interface ISectionCard {
  id?: string
  titulo?: string;
  descricao?: string;
  botao?: string;
  rota?: string;
  card?: {
    imagem?: string;
    titulo?: string;
    descricao?: string;
    botao?: boolean;
  }[];
}
