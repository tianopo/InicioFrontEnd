import { useTema } from "src/hooks";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

export interface ICheckbox extends IFormUsos {
  titulo: string;
}

export const Checkbox = ({ disabled, required, errors, titulo, register }: ICheckbox) => {
  const palavras = labelFormatada(titulo);
  const { tema } = useTema()

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
          checkbox_input-${tema}
          `}
        />
        <Label titulo={titulo} palavras={palavras} required={required} />
      </FlexRow>
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
