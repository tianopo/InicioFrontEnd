import { Form } from "react-router-dom";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { Checkbox } from "src/componentes/Formulario/CheckBox";
import { DatePickerInput } from "src/componentes/Formulario/DatePickerInput";
import { Input } from "src/componentes/Formulario/Input";
import { RichInput } from "src/componentes/Formulario/RichInput";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";
import { TextoX } from "src/componentes/Tags/TextoX";

export const Teste = () => {
  return (
    <FlexCol className={"bg-blue-400"}>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home">
        <h1>olá</h1>
      </LinkX>
      <TextoX tipo="i">tudo bem</TextoX>
      <TextoX tipo="h6">tudo bem</TextoX>
      <Checkbox nome="coisas">coisas</Checkbox>
      <Form>
        <Input titulo="Nome" placeholder="olá" required />
        <DatePickerInput titulo="Data de nascimento" />
        <Textarea titulo="Mensagem" required />
        <RichInput titulo="Mensagem" />
        <BotaoSubmit> Enviar </BotaoSubmit>
      </Form>
    </FlexCol>
  );
};
