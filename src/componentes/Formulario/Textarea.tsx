import { UseFormRegisterReturn } from "react-hook-form";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";
import { IFormUsos } from "./InterfaceForm";

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
}: ITextarea) => {
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
        <TextoX
          tipo="p"
          className=" text-16 font-normal leading-20 text-escrita"
        >
          {titulo}
          {required && (
            <TextoX tipo="span" className="text-erro">
              *
            </TextoX>
          )}
        </TextoX>
      </label>
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
      duration-300
      placeholder:text-placeholder
      md:w-80
      ${disabled ? "bg-desabilitado" : ""}
      `}
      />
    </FlexCol>
  );
};
