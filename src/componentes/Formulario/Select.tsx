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
    <FlexCol className="gap-6 p-10">
      <Label titulo={titulo} palavras={palavras} required={required} />
      <select
        id={palavras}
        name={palavras}
        disabled={disabled}
        {...register}
        autoComplete="complete"
        className={`
        w-full
        input_padrao-${tema}
        rounded-6
        border-1
        border-solid
        p-8
        font-low
        font-primaria
        outline-none
        duration-300
        md:w-80
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
