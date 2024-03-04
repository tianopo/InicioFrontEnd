import { useTheme } from "src/hooks";
import { IFormUsos } from "src/interfaces";
import { labelFormatada } from "src/utils";
import { FlexCol } from "../Flex/FlexCol";
import { FlexRow } from "../Flex/FlexRow";
import { TX } from "../Tags/TextoX";
import { Label } from "./Label";
import { MensagemDeErro } from "./MensagemErro";

export interface IRadio extends IFormUsos {
  titulo: string;
  opcoes: string[];
}

export const Radio = ({ disabled, errors, register, opcoes, titulo, required }: IRadio) => {
  const { tema } = useTheme();

  return (
    <FlexCol className="input_container">
      <TX tipo="h4" className={`label-texto label-${tema}`}>
        {titulo}{" "}
        {required && (
          <TX tipo="span" className={`label_required-${tema}`}>
            *
          </TX>
        )}
      </TX>
      {opcoes.map((opcao) => {
        const palavras = labelFormatada(opcao);

        return (
          <FlexRow key={opcao} className="w-fit gap-1.5 py-1">
            <input
              id={palavras}
              name={palavras}
              type="radio"
              value={opcao}
              readOnly
              disabled={disabled}
              checked
              className={`h-5 w-5 radio-${tema}`}
              {...register}
            />
            <Label titulo={opcao} palavras={labelFormatada(opcao)} />
          </FlexRow>
        );
      })}
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
};
