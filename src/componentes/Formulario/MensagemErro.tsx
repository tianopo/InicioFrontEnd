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
    <TextoX tipo="span" className="text-14 text-erro">
      {errors}
    </TextoX>
  );
};
