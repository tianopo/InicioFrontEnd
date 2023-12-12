import { UseFormRegisterReturn } from "react-hook-form";

export interface IFormUsos {
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegisterReturn<string>;
  errors?: string
}
