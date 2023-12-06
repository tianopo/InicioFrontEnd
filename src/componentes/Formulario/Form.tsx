import { FormHTMLAttributes } from "react"

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
  callback: (data: any) => void
}

export const Form = ({ children, callback }: IForm) => {

  return (
    <form
      onSubmit={callback}
      className="w-full"
    >
      {children}
    </form>
  )
}