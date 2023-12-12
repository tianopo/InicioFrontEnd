import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IInput extends IFormUsos {
  titulo: string;
  placeholder?: string;
  tipo?:
  | "text"
  | "tel"
  | "date"
  | "email"
  | "number"
  | "time"
  | "datetime-local";
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
  const palavras = titulo
    .split(" ")
    .map((palavra, index) =>
      index === 0
        ? palavra.toLocaleLowerCase()
        : palavra.charAt(0).toUpperCase() + palavra.slice(1),
    )
    .join("");

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
