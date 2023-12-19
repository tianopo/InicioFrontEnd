import { useTema } from "src/hooks/configuracao/useTema";
import { useLoading } from "src/hooks/useLoading";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { SkeletonX } from "../Outros/SkeletonX";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ITextarea extends IFormUsos {
  titulo: string;
  placeholder?: string;
  rows?: number;
}

export const Textarea = ({
  disabled,
  required,
  titulo,
  placeholder,
  register,
  errors,
  rows = 4,
}: ITextarea) => {
  const palavras = labelAjustada(titulo);
  const { tema } = useTema();
  const { loading } = useLoading();

  return (
    <FlexCol className={`input_container`}>
      <Label titulo={titulo} palavras={palavras} required={required} />
      {loading ? (
        <SkeletonX className={`skeleton_textarea`} />
      ) : (
        <textarea
          id={palavras}
          disabled={disabled}
          readOnly={disabled}
          placeholder={placeholder}
          rows={rows}
          {...register}
          className={`
          input-${tema}
          input_textarea
          input
          ${disabled ? "opacity-80" : ""}
          `}
        />
      )}
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
