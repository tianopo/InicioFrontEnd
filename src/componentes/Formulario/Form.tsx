import { FormHTMLAttributes, ReactNode } from "react";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit?: () => void;
}

export const Form = ({ children, onSubmit }: IForm) => {
  return (
    <form
      onSubmit={onSubmit}
      method="post"
      action="https://formsubmit.co/matheuslink18@hotmail.com"
    >
      {children}
    </form>
  );
};
