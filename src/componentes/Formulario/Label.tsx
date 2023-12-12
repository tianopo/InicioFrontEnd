import { IFormUsos } from "../../interfaces/InterfaceForm";
import { TextoX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  return (
    <label htmlFor={palavras} className="block">
      <TextoX tipo="p" className="text-16 font-normal leading-20 text-escrita">
        {titulo}
        {required && (
          <TextoX tipo="span" className="text-erro">
            *
          </TextoX>
        )}
      </TextoX>
    </label>
  );
};
