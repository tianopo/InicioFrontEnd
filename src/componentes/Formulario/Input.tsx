import { FlexCol } from "../Flex/FlexCol"
import { TextoX } from "../Tags/TextoX"

interface ILabel {
  disabled?: boolean
  required?: boolean
  nome?: string
  titulo: string
  placeholder?: string
}

export const Label = ({ disabled, required, nome, titulo, placeholder }: ILabel) => {

  return (
    <label
      htmlFor={nome}
      className="block text-14 leading-20 font-medium text-gray-700 dark:text-gray-300"
    >
      <FlexCol className="items-center justify-between">
        <TextoX tipo="p" className="text-12 leading-16">
          {titulo}
          {required && !disabled && (
            <TextoX tipo="span" className="text-red-500">*</TextoX>
          )}
        </TextoX>
        <input
          id={nome}
          type="text"
          readOnly
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={`
          p-8
          border-1
          border-solid
          border-borda
          rounded-6
          bg-input
          ${disabled ? 'opacity-50' : ''}
          `}
        />
      </FlexCol>
    </label>
  )
}
