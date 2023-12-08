import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

interface IDatePickerInput {
  titulo: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
}

export const DatePickerInput = ({ titulo, required, disabled, placeholder }: IDatePickerInput) => {
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
      <DatePicker
        disabled={disabled}
        required={required}
        selected={new Date()}
        placeholderText={placeholder}
        onChange={(date) => { }}
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
