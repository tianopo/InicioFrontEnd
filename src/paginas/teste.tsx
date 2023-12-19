import { FieldValues, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BotaoOnClick } from "src/componentes/Botoes/BotaoOnClick";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { BotaoTrocarIdioma } from "src/componentes/Botoes/BotaoTrocarIdioma";
import { BotaoTrocarTema } from "src/componentes/Botoes/BotaoTrocarTema";
import { FlexCol } from "src/componentes/Flex/FlexCol";
import { FlexRow } from "src/componentes/Flex/FlexRow";
import { Checkbox } from "src/componentes/Formulario/Checkbox";
import { DatePickerInput } from "src/componentes/Formulario/DatePickerInput";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { Select } from "src/componentes/Formulario/Select";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { DivisorX } from "src/componentes/Outros/DivisorX";
import { LinkX } from "src/componentes/Outros/LinkX";
import { SkeletonX } from "src/componentes/Outros/SkeletonX";
import { TX } from "src/componentes/Tags/TextoX";
import { useTema } from "src/hooks/configuracao/useTema";
import { useValidacaoTeste } from "src/hooks/validacoes/formTeste";

export const Teste = () => {
  const { contexto } = useValidacaoTeste();
  const { t } = useTranslation();
  const { tema } = useTema();
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
    <FlexCol className={`home-${tema}`}>
      <BotaoOnClick onClick={() => "oi"}> Gosto </BotaoOnClick>
      <DivisorX />
      <TX tipo="h1">olá</TX>
      <LinkX rota="./home">
      </LinkX>
      <FlexRow>
        <TX tipo="i">tudo bem</TX>
        <TX tipo="h6">tudo bem</TX>
      </FlexRow>
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
          <SkeletonX />
          <BotaoTrocarIdioma />
          <Textarea
            titulo="Descrição"
            register={register("descricao")}
            errors={errors.descricao?.message}
          />
          <BotaoTrocarTema />
          <DatePickerInput
            titulo="Data de nascimento"
            errors={errors.dataDeNascimento?.message}
            required
          />
          <Textarea
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

// carregamento de componentes para performance como do facebook
// fazer envio de solicitação de e-mail
// implementar arquivos de export apenas para importar direto deste arquivo em ordem alfabética
// colocar o @apply nas classes de estilização como padronização de classes iguais
// criar envio de e-mail
// fazer cabecalho, sidebar e footer
// documentar o projeto
// faça com que não consiga abrir o código ou copiar
// alteração de porta
