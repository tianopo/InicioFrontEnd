import { Form, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BotaoSubmit } from "src/componentes/Botoes/BotaoSubmit";
import { Input } from "src/componentes/Formulario/Input";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { TX } from "src/componentes/Tags/TextoX";
import { useInicio } from "src/hooks";
import { Section } from "../Section";

export const SectionContato = ({ id, titulo }: ISectionContato) => {
  const { contexto } = useInicio();
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`contato.${t}`);

  const {
    formState: { errors },
    register,
  } = contexto;

  return (
    <Section divisao={2} className="items-center p-10">
      <div className="w-full" id={id}>
        <TX tipo="h4" className="w-full text-start text-32 font-bold md:text-end">
          {titulo}
        </TX>
        <FormProvider {...contexto}>
          <Form>
            <Input
              register={register("nome")}
              titulo={t("nome")}
              placeholder="João da Silva"
              errors={errors.nome?.message}
              required
            />
            <Input
              register={register("email")}
              titulo={t("email")}
              tipo="email"
              placeholder="x@x.com"
              errors={errors.email?.message}
              required
            />
            <Input
              register={register("contato")}
              titulo={t("contato")}
              placeholder="(XX) XXXXX-XXXX"
              tipo="tel"
              errors={errors.contato?.message}
              required
            />
            <Textarea
              titulo={t("mensagem")}
              register={register("mensagem")}
              placeholder={t("mensagemPlaceholder")}
              errors={errors.mensagem?.message}
              required
            />
            <BotaoSubmit className="m-10">{t("botaoEnviar")}</BotaoSubmit>
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
// colocar toastify
interface ISectionContato {
  id?: string;
  titulo?: string;
}
