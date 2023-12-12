import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IRichInput extends IFormUsos {
  titulo: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export const RichInput = ({
  titulo,
  required,
  placeholder,
  disabled,
  errors,
}: IRichInput) => {
  const palavras = titulo
    .split(" ")
    .map((palavra, index) =>
      index === 0
        ? palavra.toLocaleLowerCase()
        : palavra.charAt(0).toUpperCase() + palavra.slice(1),
    )
    .join("");
  const { control, setValue } = useFormContext();

  const handleBlur = (content: string) => {
    setValue(palavras, content);
  };

  return (
    <FlexCol className="gap-6 p-10">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <Controller
        name={palavras}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div>
            <JoditEditor
              value={value}
              config={{
                readonly: false,
                disabled,
              }}
              onBlur={(content) => {
                handleBlur(content);
                onChange(content);
              }}
            />
          </div>
        )}
      />
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
