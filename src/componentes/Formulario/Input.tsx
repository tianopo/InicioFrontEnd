import { useForm } from "react-hook-form";
import { IValidacaoSchemaTeste, validacaoResolverTeste } from "src/validacoes/formTeste";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

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
  tipo = "text",
}: IInput) => {
  const {
    formState: { errors },
  } = useForm<IValidacaoSchemaTeste>({ resolver: validacaoResolverTeste });
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
      <label htmlFor={palavras} className="block">
        <TextoX tipo="p" className="text-16 font-normal leading-20 text-escrita">
          {titulo}
          {required && (
            <TextoX tipo="span" className="text-erro">
              *
            </TextoX>
          )}
        </TextoX>
      </label>
      <input
        id={palavras}
        name={palavras}
        type={tipo}
        disabled={disabled}
        required={required}
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
          duration-300
          placeholder:text-placeholder
          md:w-80
          ${disabled ? "bg-desabilitado" : ""}
          `}
      />
    </FlexCol>
  );
};
