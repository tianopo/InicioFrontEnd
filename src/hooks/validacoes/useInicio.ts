import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Yup from "src/utils/validacoesYup";

export interface IInicioSchema {
  nome: string;
  email: string;
  contato: string;
  mensagem: string;
}

export const useInicio = () => {
  const validacaoSchema = Yup.object().shape({
    nome: Yup.string().required().min(1).label("Nome"),
    email: Yup.string().email().required().label("E-mail"),
    contato: Yup.string().required().label("Contato"),
    mensagem: Yup.string().required().label("Mensagem"),
  });

  const contexto = useForm<IInicioSchema>({
    resolver: yupResolver(validacaoSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
};
