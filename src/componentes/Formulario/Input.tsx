import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

interface ILabel {
  disabled?: boolean;
  required?: boolean;
  nome?: string;
  titulo: string;
  placeholder?: string;
}

export const Label = ({ disabled, required, nome, titulo, placeholder }: ILabel) => {
  return (
    <label
      htmlFor={nome}
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
        <input
          id={nome}
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
          p-8
          ${disabled ? "opacity-50" : ""}
          `}
        />
      </FlexCol>
    </label>
  );
};
