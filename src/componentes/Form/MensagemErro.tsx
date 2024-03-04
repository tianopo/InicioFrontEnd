import { useTheme } from "src/hooks";
import { TX } from "../Tags/TextoX";

interface IMensagemDeErro {
  errors?: string;
}

export const MensagemDeErro = ({ errors }: IMensagemDeErro) => {
  const { tema } = useTheme();

  if (!errors) {
    return <></>;
  }

  return (
    <TX tipo="span" className={`text-12 font-normal label_required-${tema}`}>
      {errors}
    </TX>
  );
};
