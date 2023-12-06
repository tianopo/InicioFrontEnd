import { FlexRow } from "../Flex/FlexRow";

export interface ICheckbox {
  children?: React.ReactNode;
  disabled?: boolean
  nome: string
}

export const Checkbox = ({ children, nome, disabled }: ICheckbox) => {

  return (
    <FlexRow className="gap-4">
      <input
        id={nome}
        type="checkbox"
        readOnly
        disabled={disabled}
        className={`form-checkbox focus:outline-none focus:ring focus:border-borda`}
      />
      <label htmlFor={nome} className="ml-2 text-20 text-escrita">
        {children}
      </label>
    </FlexRow>
  );
};