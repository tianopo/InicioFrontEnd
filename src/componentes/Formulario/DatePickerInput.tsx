import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Controller, useFormContext } from "react-hook-form";
import { useTema } from "src/hooks/configuracao/useTema";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
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
  const { tema } = useTema();
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
