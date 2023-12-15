import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
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
  const palavras = labelAjustada(titulo);

  return (
    <FlexCol className="gap-6 p-10">
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
          w-full
          rounded-6
          border-1
          border-solid
          border-borda
          bg-input
          p-8
          font-primaria
          font-low
          text-escrita
          outline-none
          duration-300
          placeholder:text-placeholder
          focus:border-primaria
          md:w-80
          ${disabled ? "bg-desabilitado" : ""}
          `}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
