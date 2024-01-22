import { FormHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: () => void;
}

export const Form = ({ children, onSubmit }: IForm) => {
  const formContext = useFormContext();
  const { handleSubmit } = formContext || {};

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};
