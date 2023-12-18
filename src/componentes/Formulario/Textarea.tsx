import { useTema } from "src/hooks/configuracao/useTema";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ITextarea extends IFormUsos {
  titulo: string;
  placeholder?: string;
}

export const Textarea = ({
  disabled,
  required,
  titulo,
  placeholder,
  register,
  errors,
}: ITextarea) => {
  const palavras = labelAjustada(titulo);
  const { tema } = useTema();

  return (
    <FlexCol className="input_container w-fit">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <textarea
        id={palavras}
        disabled={disabled}
        readOnly={disabled}
        placeholder={placeholder}
        rows={4}
        {...register}
        className={`
        input-${tema}
        input_textarea
        input
        ${disabled ? "opacity-80" : ""}
        `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
