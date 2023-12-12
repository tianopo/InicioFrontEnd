import JoditEditor from "jodit-react";
import { Controller, useFormContext } from "react-hook-form";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

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
      <label htmlFor={palavras} className="block">
        <TextoX
          tipo="p"
          className=" text-16 font-normal leading-20 text-escrita outline-none"
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
      {errors && (
        <TextoX tipo="span" className="text-14 text-erro">
          {errors}
        </TextoX>
      )}
    </FlexCol>
  );
};
