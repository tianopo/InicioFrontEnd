import axios from "axios";
import { t } from "i18next";
import { FormProvider } from "react-hook-form";
import {
  ButtonOnClick,
  ButtonSubmit,
  Checkbox,
  DatePickerInput,
  DivisorX,
  FlexCol,
  FlexRow,
  Input,
  LinkX,
  Radio,
  Select,
  TX,
  Textarea,
} from "src/componentes";
import { Form } from "src/componentes/Form/Form";
import { useTestValidation } from "src/hooks";
import { checkboxFormatada, dataFormatada } from "src/utils";

export const Test = () => {
  const { context } = useTestValidation();

  const {
    formState: { errors },
    register,
    watch,
    reset,
  } = context;

  const onSubmit = async () => {
    try {
      const formData = watch();
      const { coisas, mensagem, email, dataDeNascimento, nome, descricao, idioma, contato } =
        formData;

      const dados = {
        accessKey: "dedff74d-dd09-4652-addf-c4b323291771",
        subject: `Contato de ${nome}`,
        message: `
        Nome: ${nome} <br>
        E-mail: ${email} <br>
        Contato: ${contato} <br>
        Mensagem: ${mensagem} <br>
        Coisas: ${checkboxFormatada(coisas)} <br>
        Data de Nascimento: ${dataFormatada(new Date(dataDeNascimento))} <br>
        Descrição: ${descricao} <br>
        Idioma: ${idioma} <br>
        `,
      };

      const response = await axios.post("https://api.staticforms.xyz/submit", dados, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        reset();
      }
    } catch (error) {
      throw new Error(`Erro ao enviar o formulário: ${error}`);
    }
  };
  const opcoes = ["Português", "Inglês", "Espanhol", "Francês"];

  return (
    <FlexCol className="w-full">
      <ButtonOnClick onClick={() => "oi"}> Gosto </ButtonOnClick>
      <DivisorX />
      <TX tipo="h1">olá</TX>
      <LinkX rota="./home"></LinkX>
      <FlexRow>
        <TX tipo="i">tudo bem</TX>
        <TX tipo="h6">tudo bem</TX>
      </FlexRow>
      <FormProvider {...context}>
        <Form onSubmit={onSubmit}>
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
          <Radio
            register={register("contato")}
            titulo="Contato"
            errors={errors.email?.message}
            opcoes={["Whatsapp", "Telefone", "Recado"]}
            required
          />
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
          <ButtonSubmit>{t("botãoEnviar")}</ButtonSubmit>
        </Form>
      </FormProvider>
    </FlexCol>
  );
};
