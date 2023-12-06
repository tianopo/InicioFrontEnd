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
    <>
      <label
        htmlFor={palavras}
        className="block text-14 font-medium leading-20 text-gray-700 dark:text-gray-300"
      >
        <FlexCol className="items-center justify-between">
          <TextoX tipo="p" className="text-12 leading-16">
            {titulo}
            {required && !disabled && (
              <TextoX tipo="span" className="text-red-500">
                *
              </TextoX>
            )}
          </TextoX>
        </FlexCol>
      </label>
      <input
        id={palavras}
        type="text"
        readOnly
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={`
          rounded-6
          border-1
          border-solid
          border-borda
          bg-input
          placeholder: text-placeholder
          p-8
          ${disabled ? "bg-desabilitado" : ""}
          `}
      />
    </>
  );
};
