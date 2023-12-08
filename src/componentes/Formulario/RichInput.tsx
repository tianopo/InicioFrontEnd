import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";
import { IFormUsos } from "./InterfaceForm";

interface IRichInput extends IFormUsos {
  titulo: string;
  placeholder?: string;
}

export const RichInput = ({
  titulo,
  required,
  placeholder,
  disabled,
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
    setValue(palavras, content); // Atualiza o valor no estado do react-hook-form
  };

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
      <Controller
        name={palavras}
        control={control}
        render={({ field: { onChange, value } }) => (
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
        )}
      />
    </FlexCol>
  );
};
