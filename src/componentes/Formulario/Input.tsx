import { useTema } from "src/hooks/configuracao/useTema";
import { useLoading } from "src/hooks/useLoading";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { SkeletonX } from "../Outros/SkeletonX";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface IInput extends IFormUsos {
  titulo: string;
  placeholder?: string;
  tipo?: "text" | "tel" | "date" | "email" | "number" | "time" | "datetime-local";
}

export const Input = ({
  disabled,
  required,
  titulo,
  placeholder,
  register,
  errors,
  tipo = "text",
}: IInput) => {
  const palavras = labelAjustada(titulo);
  const { tema } = useTema();
  const { loading } = useLoading();

  return (
    <FlexCol className="input_container">
      <Label titulo={titulo} palavras={palavras} required={required} />
      {loading ? (
        <SkeletonX className="skeleton_input" />
      ) : (
        <input
          id={palavras}
          name={palavras}
          type={tipo}
          disabled={disabled}
          placeholder={placeholder}
          {...register}
          autoComplete="complete"
          className={`
            input
            input-${tema}
            ${disabled ? "opacity-80" : ""}
          `}
        />
      )}
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
