import axios from "axios";
import { FormProvider } from "react-hook-form";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { Radio } from "src/componentes/Formulario/Radio";
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
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <Section divisao={2}>
      <div>
        <FormProvider {...contexto}>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
              titulo="Mensagem"
              register={register("mensagem")}
              errors={errors.mensagem?.message}
              required
            />
          </Form>
        </FormProvider>
      </div>
      <div>
        <img src="/flags/br.svg" alt="{titulo}" className="rounded-full w-16 h-16 bg-cover" />
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