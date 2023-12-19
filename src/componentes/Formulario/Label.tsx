import { useTema } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexRow } from "../Flex/FlexRow";
import { TX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  const { tema } = useTema();

  return (
    <FlexRow>
      <label htmlFor={palavras} className="label">
        <TX tipo="p" className={`label-texto label-${tema}`}>
          {titulo}
        </TX>
      </label>
      {required && (
        <TX tipo="span" className={`label_required-${tema}`}>
          *
        </TX>
      )}
    </FlexRow>
  );
};
