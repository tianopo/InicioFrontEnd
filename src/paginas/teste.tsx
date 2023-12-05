import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";

export const Teste = () => {
  return (
    <FlexCol className={'bg-escrita'}>
      <BotaoSubmit> Enviar </BotaoSubmit>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
    </FlexCol>
  );
};
