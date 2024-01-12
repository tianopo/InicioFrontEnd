import { PlusCircle } from "@phosphor-icons/react";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { Flex } from "src/componentes/Flex/Flex";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { CX } from "src/componentes/Tags/ConteudoX";
import { TX } from "src/componentes/Tags/TextoX";
import { useTema } from "src/hooks";
import { Section } from "../Section";

interface ISectionCard {
  id?: string;
  titulo?: string;
  descricao?: string;
  botao?: string;
  rota?: string;
  card?: ICard[];
}

interface ICard {
  imagem?: string;
  titulo?: string;
  descricao?: string;
  botao?: boolean;
  rota?: string;
}

export const SectionCard = ({ id, titulo, descricao, botao, card, rota }: ISectionCard) => {
  const rotaClick = () => {
    window.location.href = rota || "";
  };
  const { tema } = useTema();

  return (
    <Section className="p-4" id={id}>
      <CX tipo="div" className="section_card- pb-6 text-center">
        {titulo && <h1 className="mb-4 gap-5 text-36 font-bold">{titulo}</h1>}
        {descricao && (
          <p className="mb-6 overflow-hidden text-ellipsis whitespace-break-spaces text-18">
            {descricao}
          </p>
        )}
        {botao && rota && (
          <BotaoOnClick className="text-white" onClick={rotaClick}>
            {botao}
          </BotaoOnClick>
        )}
      </CX>
      <Flex className="flex-wrap justify-center gap-6">
        {card?.map(({ titulo, descricao, imagem, rota, botao = false }: ICard, key) => (
          <FlexCol
            key={key}
            className={`h-fit w-72 items-center gap-1.5 rounded-10 section_card-${tema} p-3 shadow-xl`}
          >
            {imagem && (
              <img src={imagem} alt={titulo} className="h-16 w-16 rounded-full bg-cover" />
            )}
            {titulo && (
              <TX tipo="h5" className="text-20 font-bold text-white">
                {titulo}
              </TX>
            )}
            {descricao && (
              <TX tipo="p" className="text-center text-16 text-white">
                {descricao}
              </TX>
            )}
            {botao && rota && (
              <button
                className="hover:opacity-50"
                onClick={() => {
                  window.location.href = rota;
                }}
              >
                <PlusCircle size={24} className="text-white" />
              </button>
            )}
          </FlexCol>
        ))}
      </Flex>
    </Section>
  );
};
