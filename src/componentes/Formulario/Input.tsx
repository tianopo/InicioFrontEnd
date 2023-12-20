import { useTema } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IInput extends IFormUsos {
  titulo: string;
  placeholder?: string;
  tipo?: "text" | "tel" | "date" | "email" | "number" | "time" | "datetime-local";
}

export const Input = ({
  disabled,
  required,
  titulo,
  placeholder,
  register,
  errors,
  tipo = "text",
}: IInput) => {
  const palavras = labelFormatada(titulo);
  const { tema } = useTema();

  return (
    <FlexCol className="input_container">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <input
        id={palavras}
        name={palavras}
        type={tipo}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        autoComplete="complete"
        className={`
            input
            input-${tema}
            ${disabled ? "opacity-80" : ""}
          `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
