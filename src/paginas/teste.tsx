import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";

export const Teste = () => {
  return (
    <FlexCol className={'bg-escrita'}>
      <BotaoSubmit> Enviar </BotaoSubmit>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home"><h1>olá</h1></LinkX>
    </FlexCol>
  );
};
