import { useTheme } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ITextarea extends IFormUsos {
  titulo: string;
  placeholder?: string;
  rows?: number;
}

export const Textarea = ({
  disabled,
  required,
  titulo,
  placeholder,
  register,
  errors,
  rows = 4,
}: ITextarea) => {
  const palavras = labelFormatada(titulo);
  const { tema } = useTheme();

  return (
    <FlexCol className={`input_container`}>
      <Label titulo={titulo} palavras={palavras} required={required} />
      <textarea
        id={palavras}
        name={palavras}
        disabled={disabled}
        readOnly={disabled}
        placeholder={placeholder}
        rows={rows}
        {...register}
        className={`
          input-${tema}
          input
          resize-none
          ${disabled ? "opacity-80" : ""}
          `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
