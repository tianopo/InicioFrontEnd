import { FlexRow } from "../Flex/FlexRow";

export interface ICheckbox {
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  nome: string;
}

export const Checkbox = ({ children, disabled, required, nome }: ICheckbox) => {
  return (
    <FlexRow className="gap-4">
      <input
        id={nome}
        type="checkbox"
        readOnly
        disabled={disabled}
        required={required}
        className={`form-checkbox focus:border-borda focus:outline-none focus:ring`}
      />
      <label htmlFor={nome} className="ml-2 text-20 text-escrita">
        {children}
      </label>
    </FlexRow>
  );
};
