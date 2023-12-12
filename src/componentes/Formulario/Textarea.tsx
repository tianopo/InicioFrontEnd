import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/InterfaceForm";
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
  const palavras = labelAjustada(titulo)

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
      resize-none
      rounded-6
      border-1
      border-solid
      border-borda
      bg-input
      p-8
      font-low
      text-escrita
      outline-none
      duration-300
      placeholder:text-placeholder
      md:w-80
      ${disabled ? "bg-desabilitado" : ""}
      `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
