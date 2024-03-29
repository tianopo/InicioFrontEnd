import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Yup from "src/utils/validacoesYup";

export interface ISchemaValidation {
  coisas?: boolean;
  nome: string;
  email: string;
  contato: string;
  descricao?: string;
  dataDeNascimento: string;
  mensagem: string;
  idioma?: string;
}

export const useTestValidation = () => {
  const schemaValidation = Yup.object().shape({
    coisas: Yup.boolean().optional().label("Coisas"),
    nome: Yup.string().required().min(1).label("Nome"),
    email: Yup.string().email().required().label("E-mail"),
    contato: Yup.string().required().label("Contato"),
    descricao: Yup.string().optional().max(5000).label("Descrição"),
    dataDeNascimento: Yup.string().required().label("Data de Nascimento"),
    mensagem: Yup.string().required().label("Mensagem"),
    idioma: Yup.string().optional().label("Idioma"),
  });

  const context = useForm<ISchemaValidation>({
    resolver: yupResolver(schemaValidation),
    reValidateMode: "onChange",
  });

  return { context };
};
