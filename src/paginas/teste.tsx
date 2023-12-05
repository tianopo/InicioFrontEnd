import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { DivisorX } from "src/componentes/Outros/DivisorX";

export const Teste = () => {
  return (
    <FlexCol className={'bg-escrita'}>
      <BotaoSubmit> Enviar </BotaoSubmit>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
    </FlexCol>
  );
};
