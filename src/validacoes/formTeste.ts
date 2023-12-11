import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IValidacaoSchemaTeste extends yup.InferType<typeof validacaoSchemaTeste> {}

const validacaoSchemaTeste = yup.object({
  coisas: yup.boolean().optional(),
  nome: yup.string().required("preencha seu nome completo").min(1),
  email: yup.string().email("preencha um email válido").required("preencha o e-mail"),
  descricao: yup.string().optional().max(5000),
  dataDeNascimento: yup.string().required("preencha a sua data de nascimento"),
  mensagem: yup.string().required("preencha o conteudo"),
});

export const validacaoResolverTeste = yupResolver(validacaoSchemaTeste);
