import { labelAjustada } from "src/utils/labelAjustada";
import { IFormUsos } from "../../interfaces/InterfaceForm";
import { FlexCol } from "../Flex/FlexCol";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

interface ISelect extends IFormUsos {
  titulo: string;
  opcoes?: string[];
}

export const Select = ({ disabled, required, register, errors, titulo, opcoes }: ISelect) => {
  const palavras = labelAjustada(titulo);

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
          rounded-6
          border-1
          border-solid
          border-borda
          bg-input
          p-8
          font-low
          text-escrita
          outline-none
          duration-300
          placeholder:text-placeholder
          focus:border-primaria
          md:w-80
          ${disabled ? "bg-desabilitado" : ""}
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
