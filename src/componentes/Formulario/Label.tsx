import { IFormUsos } from "../../interfaces/InterfaceForm";
import { TX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  return (
    <label htmlFor={palavras} className="block w-fit">
      <TX tipo="p" className="text-16 font-normal leading-20 text-escrita">
        {titulo}
        {required && (
          <TX tipo="span" className="text-erro">
            *
          </TX>
        )}
      </TX>
    </label>
  );
};
