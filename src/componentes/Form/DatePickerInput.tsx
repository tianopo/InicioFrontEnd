import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import { useTheme } from "src/hooks";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
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
  const palavras = labelFormatada(titulo);
  const { tema } = useTheme();
  const { control } = useFormContext();

  return (
    <FlexCol className="input_container">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <Controller
        name={palavras}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            id={palavras}
            name={palavras}
            disabled={disabled}
            selected={value}
            placeholderText={placeholder}
            onChange={(date: Date) => onChange(date)}
            className={`
                  input
                  input-${tema}
                  ${disabled ? "opacity-80" : ""}
                `}
          />
        )}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
