import { labelFormatada } from "src/utils/formatacao/labelFormatada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

export interface ICheckbox extends IFormUsos {
  titulo: string;
}

export const Checkbox = ({ disabled, required, errors, titulo, register }: ICheckbox) => {
  const palavras = labelFormatada(titulo);

  return (
    <FlexCol>
      <FlexRow className="checkbox_flex_row">
        <input
          id={titulo}
          name={palavras}
          type="checkbox"
          readOnly
          disabled={disabled}
          {...register}
          className={`
          checkbox_input
          `}
        />
        <Label titulo={titulo} palavras={palavras} required={required} />
      </FlexRow>
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
