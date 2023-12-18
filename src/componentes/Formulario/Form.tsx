import { FormHTMLAttributes } from "react";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: () => void;
}

export const Form = ({ children, onSubmit }: IForm) => {
  return (
    <form onSubmit={onSubmit} className="form" method="POST">
      {children}
    </form>
  );
};
