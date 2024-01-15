import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Yup from "src/utils/validacoesYup";

export interface IInicioSchema {
  nome: string;
  email: string;
  contato: string;
  mensagem: string;
}

export const useInicio = () => {
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`contato.${t}`);

  const validacaoSchema = Yup.object().shape({
    nome: Yup.string().required().min(1).label(t("nome")),
    email: Yup.string().email().required().label(t("email")),
    contato: Yup.string().required().label(t("contato")),
    mensagem: Yup.string().required().label(t("mensagem")),
  });

  const contexto = useForm<IInicioSchema>({
    resolver: yupResolver(validacaoSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
};
