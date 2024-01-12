import { t } from "i18next";
import { Form, FormProvider } from "react-hook-form";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { Input } from "src/componentes/Formulario/Input";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { TX } from "src/componentes/Tags/TextoX";
import { useInicio } from "src/hooks";
import { Section } from "../Section";

export const SectionContato = ({ id }: ISectionContato) => {
  const { contexto } = useInicio();
  const {
    formState: { errors },
    register,
  } = contexto;

  return (
    <Section id={id} divisao={2} className="items-center p-10">
      <div className="w-full">
        <TX tipo="h4" className="w-full text-start text-32 font-bold md:text-end">
          Contato
        </TX>
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
        <img
          src="/projeto/banner.webp"
          alt="Imagem da Empresa"
          className="h-fit w-fit rounded-full"
        />
      </div>
    </Section>
  );
};

interface ISectionContato {
  id?: string;
}
