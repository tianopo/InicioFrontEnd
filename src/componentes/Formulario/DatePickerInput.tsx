import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IDatePickerInput extends IFormUsos {
  titulo: string;
  placeholder?: string;
}

export const DatePickerInput = ({
  titulo,
  required,
  disabled,
  placeholder,
  errors,
}: IDatePickerInput) => {
  const palavras = labelAjustada(titulo);

  const { control } = useFormContext();

  return (
    <FlexCol className="gap-6 p-10">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <Controller
        name={palavras}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            id={palavras}
            disabled={disabled}
            selected={value}
            placeholderText={placeholder}
            onChange={(date: Date) => onChange(date)}
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
          md:w-80
          ${disabled ? "bg-desabilitado" : ""}
          `}
          />
        )}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
