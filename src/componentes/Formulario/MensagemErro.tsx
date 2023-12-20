import { useTema } from "src/hooks";
import { TX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string;
}

export const MensagemDeErro = ({ errors }: IMensagemDeErro) => {
  const { tema } = useTema();

  if (!errors) {
    return <></>;
  }

  return (
    <TX tipo="span" className={`mensagem_erro label_required-${tema}`}>
      {errors}
    </TX>
  );
};
