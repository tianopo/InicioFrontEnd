import axios from "axios";
import { t } from "i18next";
import { FormProvider } from "react-hook-form";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { useInicio } from "src/hooks";
import { Section } from "../Section";

export const SectionContato = ({ titulo, descricao, botao, children }: ISectionContato) => {
  const { contexto } = useInicio();
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    reset,
  } = contexto;

  const onSubmit = async () => {
    try {
      const formData = watch();
      const { mensagem, email, nome, contato } =
        formData;

      const dados = {
        accessKey: "dedff74d-dd09-4652-addf-c4b323291771",
        subject: `Contato de ${nome}`,
        message: `
        Nome: ${nome} <br>
        E-mail: ${email} <br>
        Contato: ${contato} <br>
        Mensagem: ${mensagem} <br>
        `,
      };

      const response = await axios.post("https://api.staticforms.xyz/submit", dados, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        reset();
        console.log(nome, email, contato, mensagem)
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <Section divisao={2} className="items-center p-10">
      <div>
        <FormProvider {...contexto}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register("nome")}
              titulo="Nome"
              placeholder="João da Silva"
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
            <Input
              register={register("contato")}
              titulo="Contato"
              placeholder="(XX) XXXXX-XXXX"
              errors={errors.contato?.message}
              required
            />
            <Textarea
              titulo="Mensagem"
              register={register("mensagem")}
              placeholder="Escreva a sua mensagem..."
              errors={errors.mensagem?.message}
              required
            />
            <BotaoSubmit className="m-10">{t("botãoEnviar")}</BotaoSubmit>
          </Form>
        </FormProvider>
      </div>
      <div>
        <img src="/flags/br.svg" alt="{titulo}" className="rounded-full w-fit h-fit" />
      </div>
    </Section>
  )
}

interface ISectionContato {
  titulo?: string
  descricao?: string
  botao?: string
  children?: string
}