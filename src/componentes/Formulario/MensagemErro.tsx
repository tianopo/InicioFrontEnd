import { TX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string;
}

export const MensagemDeErro = ({ errors }: IMensagemDeErro) => {
  if (!errors) {
    return <></>;
  }

  return (
    <TX tipo="span" className="text-12 font-normal text-erro">
      {errors}
    </TX>
  );
};
