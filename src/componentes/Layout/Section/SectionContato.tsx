import axios from "axios";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Form } from "src/componentes/Formulario/Form";
import { Input } from "src/componentes/Formulario/Input";
import { Textarea } from "src/componentes/Formulario/Textarea";
import { TX } from "src/componentes/Tags/TextoX";
import { useInicio, useTema } from "src/hooks";
import { Section } from "../Section";

export const SectionContato = ({ id, titulo }: ISectionContato) => {
  const { contexto } = useInicio();
  const { tema } = useTema();
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`contato.${t}`);

  const {
    formState: { errors },
    register,
    watch,
    reset,
  } = contexto;

  const onSubmit = async () => {
    try {
      const { mensagem, email, nome, contato } = watch();

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
        toast.success(t("toastSucesso"));
        reset();
      }
    } catch (error) {
      toast.error(`${t("toastErro")}: ${error}`);
    }
  };

  return (
    <Section divisao={2} className="items-center p-10">
      <div className="w-full" id={id}>
        <TX tipo="h4" className="w-full text-start text-32 font-bold md:text-end">
          {titulo}
        </TX>
        <FormProvider {...contexto}>
          <Form onSubmit={onSubmit}>
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
            />
            <button className={`botao botao-${tema} m-10`}>{t("botaoEnviar")}</button>
            <input type="hidden" name="redirectTo" value={window.location.href}></input>
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
  titulo?: string;
}
