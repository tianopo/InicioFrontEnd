import { ReactNode } from "react";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { Section } from "../Section";

export const SectionBanner = ({ children, imagem, titulo, descricao, botao }: ISectionBanner) => {
  return (
    <Section>
      <div className="relative h-96 bg-cover" style={{ backgroundImage: `url('${imagem}')` }}>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 p-12 text-center text-white">
          {imagem && <img src="/flags/br.svg" alt={titulo} className="h-8 w-12" />}
          {titulo && <h1 className="mb-4 text-justify text-36 font-bold">{titulo}</h1>}
          {descricao && <p className="mb-6 text-justify text-18">{descricao}</p>}
          {botao && (
            <BotaoOnClick className="bg-blue-500 text-white hover:bg-blue-700">
              {botao}
            </BotaoOnClick>
          )}
        </div>
        {children}
      </div>
    </Section>
  );
};

interface ISectionBanner {
  children?: ReactNode;
  imagem: string;
  titulo?: string;
  descricao?: string;
  botao?: string;
}
