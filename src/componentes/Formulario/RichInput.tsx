import JoditEditor from "jodit-react";
import { FlexCol } from "../Flex/FlexCol";
import { TextoX } from "../Tags/TextoX";

interface IRichInput {
  disabled?: boolean;
  required?: boolean;
  titulo: string;
  placeholder?: string;
}

export const RichInput = ({ titulo, required, placeholder, disabled }: IRichInput) => {
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
      <JoditEditor
        value={''}
        config={{
          readonly: false,
          disabled: disabled,
        }}
        onChange={newContent => { }}
      />
    </FlexCol>
  );
};
