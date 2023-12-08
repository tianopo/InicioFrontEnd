import { FieldValues, useForm } from "react-hook-form";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { Checkbox } from "src/componentes/Formulario/CheckBox";
import { DatePickerInput } from "src/componentes/Formulario/DatePickerInput";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { RichInput } from "src/componentes/Formulario/RichInput";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";
import { TextoX } from "src/componentes/Tags/TextoX";

export const Teste = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (values: FieldValues) => {
    console.log('valores', values)
  }

  return (
    <FlexCol className={"bg-blue-400"}>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home">
        <h1>olá</h1>
      </LinkX>
      <TextoX tipo="i">tudo bem</TextoX>
      <TextoX tipo="h6">tudo bem</TextoX>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox titulo="coisas" register={register('coisas')}>coisas</Checkbox>
        <Input register={register('nome')} titulo="Nome" placeholder="olá" required />
        <Textarea titulo="Mensagem" register={register('mensagem')} />
        <DatePickerInput titulo="Data de nascimento" />
        <RichInput titulo="Mensagem" />
        <BotaoSubmit> Enviar </BotaoSubmit>
      </Form>
    </FlexCol>
  );
};
