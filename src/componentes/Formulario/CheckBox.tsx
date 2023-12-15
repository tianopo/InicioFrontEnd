import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

export interface ICheckbox extends IFormUsos {
  titulo: string;
}

export const Checkbox = ({ disabled, required, errors, titulo, register }: ICheckbox) => {
  const palavras = labelAjustada(titulo);

  return (
    <FlexCol>
      <FlexRow className="gap-4 p-8">
        <input
          id={titulo}
          type="checkbox"
          readOnly
          disabled={disabled}
          {...register}
          className={`form-checkbox outline-none focus:border-borda focus:outline-none focus:ring`}
        />
        <Label titulo={titulo} palavras={palavras} required={required} />
      </FlexRow>
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
