import { useTema } from "src/hooks";
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
  const { tema } = useTema();

  return (
    <FlexCol>
      <TX tipo="h4" className="label-texto">
        {titulo} {required && <TX tipo="span" className={`label_required-${tema}`}>*</TX>}
      </TX>
      {opcoes.map((opcao) => {
        const palavras = labelFormatada(opcao);

        return (
          <FlexRow key={opcao} className="radio_flex_row">
            <input
              id={palavras}
              name={palavras}
              type="radio"
              value={opcao}
              readOnly
              disabled={disabled}
              className="radio"
              {...register}
            />
            <Label titulo={opcao} palavras={labelFormatada(opcao)} />
          </FlexRow>
        );
      })}
      <MensagemDeErro errors={errors} />
    </FlexCol>
  );
}