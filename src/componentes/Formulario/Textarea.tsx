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
    <FlexCol className="gap-6 p-10">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <textarea
        id={palavras}
        disabled={disabled}
        readOnly={disabled}
        required={required}
        placeholder={placeholder}
        rows={4}
        {...register}
        className={`
        w-full
        input_padrao-${tema}
        rounded-6
        border-1
        border-solid
        p-8
        font-low
        font-primaria
        outline-none
        duration-300
        md:w-80
        resize-none
        ${disabled ? "opacity-80" : ""}
        `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
