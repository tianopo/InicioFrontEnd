import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

interface IInput {
  disabled?: boolean;
  required?: boolean;
  titulo: string;
  placeholder?: string;
}

export const Input = ({ disabled, required, titulo, placeholder }: IInput) => {
  const palavras = titulo.split(" ")
    .map((palavra, index) =>
      index === 0
        ? palavra.toLocaleLowerCase()
        : palavra.charAt(0).toUpperCase() + palavra.slice(1)
    )
    .join("");

  return (
    <FlexCol className="gap-6">
      <label
        htmlFor={palavras}
        className="block text-16 font-normal leading-20 text-gray-700 dark:text-gray-300"
      >
        {titulo}
        {required && (
          <TextoX tipo="span" className="text-erro">
            *
          </TextoX>
        )}
      </label>
      <input
        id={palavras}
        type="text"
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={`
          w-full
          rounded-6
          border-1
          text-escrita
          border-solid
          border-borda
          duration-300
          bg-input
          placeholder:text-placeholder
          p-8
          md:w-80
          ${disabled ? "bg-desabilitado" : ""}
          `}
      />
    </ FlexCol>
  );
};
