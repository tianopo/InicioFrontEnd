import { useTheme } from "src/hooks/configuracao/useTema";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ISelect extends IFormUsos {
  titulo: string;
  opcoes?: string[];
}

export const Select = ({ disabled, required, register, errors, titulo, opcoes }: ISelect) => {
  const palavras = labelFormatada(titulo);
  const { tema } = useTheme();

  return (
    <FlexCol className="input_container">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <select
        id={palavras}
        name={palavras}
        disabled={disabled}
        {...register}
        autoComplete="complete"
        className={`
        input
        input-${tema}
        ${disabled ? "opacity-80" : ""}
        `}
      >
        {opcoes?.map((opcao, index) => (
          <option key={index} value={labelFormatada(opcao)}>
            {opcao}
          </option>
        ))}
      </select>
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
