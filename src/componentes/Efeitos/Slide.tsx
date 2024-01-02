import { ReactNode } from "react"

interface ISlide {
  children?: ReactNode
}

export const SlideIn = ({ children }: ISlide) => {
  return (
    <div className="slideIn">
      {children}
    </div>
  )
}