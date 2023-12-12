import { TextoX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string
}

export const MensagemDeErro = ({
  errors,
}: IMensagemDeErro) => {

  if (!errors) {
    return <></>
  }

  return (
    <TextoX tipo="span" className="text-12 text-erro font-normal">
      {errors}
    </TextoX>
  );
};
