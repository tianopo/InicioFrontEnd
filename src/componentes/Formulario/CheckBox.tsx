import { FlexRow } from "../Flex/FlexRow";
import { IFormUsos } from "./InterfaceForm";

export interface ICheckbox extends IFormUsos {
  children?: React.ReactNode;
  titulo: string;
}

export const Checkbox = ({
  children,
  disabled,
  required,
  titulo,
  register,
}: ICheckbox) => {
  return (
    <FlexRow className="gap-4 p-8">
      <input
        id={titulo}
        type="checkbox"
        readOnly
        disabled={disabled}
        required={required}
        {...register}
        className={`form-checkbox focus:border-borda focus:outline-none focus:ring`}
      />
      <label htmlFor={titulo} className="ml-2 text-20 text-escrita">
        {children}
      </label>
    </FlexRow>
  );
};
