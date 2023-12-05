import { ConteudoX } from "../Tags/ConteudoX";

export interface ICheckbox {
  children?: React.ReactNode;
  nome: string
}

export const Checkbox = ({ children, nome }: ICheckbox) => {

  return (
    <ConteudoX tipo="div">
      <input
        id={nome}
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-primaria focus:outline-none focus:ring focus:border-primary-300 `}
      />
      <label htmlFor={nome} className="ml-2 text-sm text-escrita">
        {children}
      </label>
    </ConteudoX>
  );
};