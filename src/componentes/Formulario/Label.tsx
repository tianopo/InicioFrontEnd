import { useTema } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { TX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  const { tema } = useTema();

  return (
    <label htmlFor={palavras} className="block w-fit">
      <TX tipo="p" className={`label label-${tema}`}>
        {titulo}
        {required && (
          <TX tipo="span" className={`label_required-${tema}`}>
            *
          </TX>
        )}
      </TX>
    </label>
  );
};
