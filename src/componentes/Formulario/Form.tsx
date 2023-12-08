import { FormHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: () => void;
  register?: UseFormRegister<FieldValues>
}

export const Form = ({ children, onSubmit }: IForm) => {

  return (
    <form onSubmit={onSubmit} className="w-full p-8" method="POST">
      {children}
    </form>
  );
};
