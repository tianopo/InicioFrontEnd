import { FieldValues, FormProvider } from "react-hook-form";
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
import { useValidacaoTeste } from "src/hooks/validacoes/formTeste";

export const Teste = () => {
  const { contexto } = useValidacaoTeste();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = contexto;

  const onSubmit = (values: FieldValues) => {
    console.log("valores", values);
  };

  return (
    <FlexCol className={"bg-gray-400"}>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home">
        <h1>olá</h1>
      </LinkX>
      <TextoX tipo="i">tudo bem</TextoX>
      <TextoX tipo="h6">tudo bem</TextoX>
      <FormProvider {...contexto}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Checkbox
            titulo="coisas"
            register={register("coisas")}
            errors={errors.coisas?.message}
          >
            coisas
          </Checkbox>
          <Input
            register={register("nome")}
            titulo="Nome"
            placeholder="olá"
            errors={errors.nome?.message}
            required
          />
          <Input
            register={register("email")}
            titulo="E-mail"
            placeholder="x@x.com"
            errors={errors.email?.message}
            required
          />
          <Textarea titulo="Descrição" register={register("descricao")} />
          <DatePickerInput
            titulo="Data de nascimento"
            errors={errors.dataDeNascimento?.message}
            required
          />
          <RichInput titulo="Mensagem" errors={errors.mensagem?.message} required />
          <BotaoSubmit> Enviar </BotaoSubmit>
        </Form>
      </FormProvider>
    </FlexCol>
  );
};
// arrume palavras de label para não ter acentuação
// arrumar as configurações de pular linha no prettier
// implementar jotai
// colocar algo mais nas mensagems de erro
// colocar o @apply nas classes de estilização
// implementar temas de escuro e claro
