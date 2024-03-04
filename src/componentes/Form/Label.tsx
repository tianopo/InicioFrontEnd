import { useTheme } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexRow } from "../Flex/FlexRow";
import { TX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  const { tema } = useTheme();

  return (
    <FlexRow>
      <label htmlFor={palavras} className="block w-fit">
        <TX tipo="p" className={`text-16 font-normal leading-20 label-${tema}`}>
          {titulo}{" "}
          {required && (
            <TX tipo="span" className={`label_required-${tema}`}>
              *
            </TX>
          )}
        </TX>
      </label>
    </FlexRow>
  );
};
