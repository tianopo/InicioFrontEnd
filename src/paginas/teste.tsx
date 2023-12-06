import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { Checkbox } from "src/componentes/Formulario/CheckBox";
import { Input } from "src/componentes/Formulario/Input";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";
import { TextoX } from "src/componentes/Tags/TextoX";

export const Teste = () => {
  return (
    <FlexCol className={"bg-blue-400"}>
      <BotaoSubmit> Enviar </BotaoSubmit>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home">
        <h1>olá</h1>
      </LinkX>
      <TextoX tipo="i">tudo bem</TextoX>
      <TextoX tipo="h6">tudo bem</TextoX>
      <Checkbox nome="coisas">coisas</Checkbox>
      <Input titulo='cv cvcvxvcxfd  fer rthyhyh ryh'></Input>
    </FlexCol>
  );
};
