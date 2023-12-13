import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Yup from "src/utils/validacoesYup";

export interface IValidacaoSchema {
  coisas?: boolean;
  nome: string;
  email: string;
  descricao?: string;
  dataDeNascimento: string;
  mensagem: string;
  idioma?: string;
}

export const useValidacaoTeste = () => {
  const validacaoSchema = Yup.object().shape({
    coisas: Yup.boolean().optional().label("Coisas"),
    nome: Yup.string().required().min(1).label("Nome"),
    email: Yup.string().email().required().label("E-mail"),
    descricao: Yup.string().optional().max(5000).label("Descrição"),
    dataDeNascimento: Yup.string().required().label("Data de Nascimento"),
    mensagem: Yup.string().required().label("Mensagem"),
    idioma: Yup.string().optional().label("Idioma"),
  });

  const contexto = useForm<IValidacaoSchema>({
    resolver: yupResolver(validacaoSchema),
    reValidateMode: "onChange",
  });

  return { contexto };
};
