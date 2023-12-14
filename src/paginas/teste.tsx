import { FieldValues, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { TrocarIdioma } from "src/componentes/Botoes/TrocarIdioma";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { Checkbox } from "src/componentes/Formulario/CheckBox";
import { DatePickerInput } from "src/componentes/Formulario/DatePickerInput";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { RichInput } from "src/componentes/Formulario/RichInput";
import { Select } from "src/componentes/Formulario/Select";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";
import { TX } from "src/componentes/Tags/TextoX";
import { useValidacaoTeste } from "src/hooks/validacoes/formTeste";

export const Teste = () => {
  const { contexto } = useValidacaoTeste();
  const { t } = useTranslation();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = contexto;

  const onSubmit = (values: FieldValues) => {
    return values;
  };
  const opcoes = ["Português", "Inglês", "Espanhol", "Francês"];

  return (
    <FlexCol className={"bg-gray-400"}>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <LinkX rota="./home">
        <TX tipo="h1">olá</TX>
      </LinkX>
      <TX tipo="i">tudo bem</TX>
      <TX tipo="h6">tudo bem</TX>
      <FormProvider {...contexto}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Checkbox titulo="coisas" register={register("coisas")} errors={errors.coisas?.message} />
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
          <TrocarIdioma />
          <Textarea
            titulo="Descrição"
            register={register("descricao")}
            errors={errors.descricao?.message}
          />
          <DatePickerInput
            titulo="Data de nascimento"
            errors={errors.dataDeNascimento?.message}
            required
          />
          <RichInput
            titulo="Mensagem"
            register={register("mensagem")}
            errors={errors.mensagem?.message}
            required
          />
          <Select
            titulo="Idioma"
            register={register("idioma")}
            errors={errors.idioma?.message}
            opcoes={opcoes}
          />
          <BotaoSubmit>{t("botãoEnviar")}</BotaoSubmit>
        </Form>
      </FormProvider>
    </FlexCol>
  );
};
// implementar temas de escuro e claro
// implementar arquivos de export apenas para importar direto deste arquivo
// colocar o @apply nas classes de estilização como padronização de classes iguais
// fazer cabecalho, sidebar e footer
// carregamento de componentes para performance como do facebook
// documentar o projeto
// faça com que não consiga abrir o código ou copiar
