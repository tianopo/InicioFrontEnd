import { t } from "i18next";
import { FormProvider } from "react-hook-form";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { useInicio } from "src/hooks";
import { Section } from "../Section";

export const SectionContato = ({ id, titulo, descricao, botao, children }: ISectionContato) => {
  const { contexto } = useInicio();
  const {
    formState: { errors },
    register,
  } = contexto;

  return (
    <Section divisao={2} className="items-center p-10">
      <div className="w-full">
        <FormProvider {...contexto}>
          <Form>
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
              tipo="email"
              placeholder="x@x.com"
              errors={errors.email?.message}
              required
            />
            <Input
              register={register("contato")}
              titulo="Contato"
              placeholder="(XX) XXXXX-XXXX"
              tipo="tel"
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
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value={window.location.href}></input>
          </Form>
        </FormProvider>
      </div>
      <div className="hidden md:inline">
        <img src="/projeto/banner.webp" alt={titulo} className="h-fit w-fit rounded-full" />
      </div>
    </Section>
  );
};

interface ISectionContato {
  id?: string;
  titulo?: string;
  descricao?: string;
  botao?: string;
  children?: string;
}
