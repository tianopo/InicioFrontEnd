import { useTema } from "src/hooks/configuracao/useTema";
import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ISelect extends IFormUsos {
  titulo: string;
  opcoes?: string[];
}

export const Select = ({ disabled, required, register, errors, titulo, opcoes }: ISelect) => {
  const palavras = labelAjustada(titulo);
  const { tema } = useTema();

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
          <option key={index} value={labelAjustada(opcao)}>
            {opcao}
          </option>
        ))}
      </select>
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
