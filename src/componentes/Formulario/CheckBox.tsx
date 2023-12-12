import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { TextoX } from "../Tags/TextoX";

export interface ICheckbox extends IFormUsos {
  children?: React.ReactNode;
  titulo: string;
}

export const Checkbox = ({
  children,
  disabled,
  required,
  errors,
  titulo,
  register,
}: ICheckbox) => {
  const palavras = titulo
    .split(" ")
    .map((palavra, index) =>
      index === 0
        ? palavra.toLocaleLowerCase()
        : palavra.charAt(0).toUpperCase() + palavra.slice(1),
    )
    .join("");

  return (
    <FlexCol>
      <FlexRow className="gap-4 p-8">
        <input
          id={titulo}
          type="checkbox"
          readOnly
          disabled={disabled}
          {...register}
          className={`form-checkbox outline-none focus:border-borda focus:outline-none focus:ring`}
        />
        <label htmlFor={palavras} className="block">
          <TextoX
            tipo="p"
            className="text-16 font-normal leading-20 text-escrita"
          >
            {titulo}
            {required && (
              <TextoX tipo="span" className="text-erro">
                *
              </TextoX>
            )}
          </TextoX>
        </label>
      </FlexRow>
      {errors && (
        <TextoX tipo="span" className="text-14 text-erro">
          {errors}
        </TextoX>
      )}
    </FlexCol>
  );
};
