import { useTema } from "src/hooks/configuracao/useTema";
import { useLoading } from "src/hooks/useLoading";
import { IFormUsos } from "../../interfaces/IFormUsos";
import { SkeletonX } from "../Outros/SkeletonX";
import { TX } from "../Tags/TextoX";

interface ILabel extends IFormUsos {
  titulo: string;
  palavras: string;
}

export const Label = ({ required, titulo, palavras }: ILabel) => {
  const { tema } = useTema();
  const { loading } = useLoading();

  return (
    <>
      {
        loading ? (
          <SkeletonX className="label-texto" />
        ) : (
          <label htmlFor={palavras} className="label">
            <TX tipo="p" className={`label-texto label-${tema}`}>
              {titulo}
              {required && (
                <TX tipo="span" className={`label_required-${tema}`}>
                  *
                </TX>
              )}
            </TX>
          </label>
        )}
    </>
  );
};
