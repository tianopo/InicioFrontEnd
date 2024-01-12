import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTema } from "src/hooks";
import { LocalStorage } from "src/utils";
import { CX } from "../Tags/ConteudoX";

interface IBotaoTrocarIdioma {
  menuBottom?: boolean;
}

export const BotaoTrocarIdioma = ({ menuBottom }: IBotaoTrocarIdioma) => {
  const opcoes = [
    {
      valor: "ptbr",
      flag: "/flags/br.svg",
    },
    {
      valor: "en",
      flag: "/flags/us.svg",
    },
    {
      valor: "fr",
      flag: "/flags/fr.svg",
    },
  ];

  const obterIdiomaInicial = () => {
    const idiomaSalvo = localStorage.get("idioma");
    return idiomaSalvo || opcoes[0].valor;
  };

  const localStorage = new LocalStorage();
  const { tema } = useTema();
  const { i18n } = useTranslation();
  const [idiomaSelecionado, setIdiomaSelecionado] = useState(obterIdiomaInicial());
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarIdioma = (novoIdioma: string) => {
    setIdiomaSelecionado(novoIdioma);
    i18n.changeLanguage(novoIdioma);
    setMenuAberto(false);
    localStorage.set("idioma", novoIdioma);
  };

  useEffect(() => {
    i18n.changeLanguage(idiomaSelecionado);
  }, [idiomaSelecionado, i18n]);

  return (
    <CX tipo="div" className="relative inline-block w-auto duration-300">
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        onBlur={() =>
          setTimeout(() => {
            setMenuAberto(false);
          }, 100)
        }
        className={`
        z-10
        flex
        items-center
        justify-between
        rounded-6
        border-1
        border-solid
        pl-1.5
        pr-1
        outline-none
        botao_trocar_idioma-${tema}
        `}
      >
        <img
          src={opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.flag}
          alt={`Bandeira de ${opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.valor}`}
          className="h-7 w-7"
        />
        {menuAberto ? <CaretDown className="h-4 w-4" /> : <CaretRight className="h-4 w-4" />}
      </button>
      {menuAberto && (
        <div
          className={`
          absolute
          mt-4
          w-16
          rounded-6
          bg-white
          shadow-lg
        ${menuBottom ? "bottom-10" : ""}`}
        >
          {opcoes.map((opcao) => (
            <button
              key={opcao.valor}
              className={`
              flex
              w-full
              justify-center
              hover:rounded-6
              botao_trocar_idioma-${tema}
              `}
              onClick={() => alternarIdioma(opcao.valor)}
            >
              <img src={opcao.flag} alt={opcao.valor} className="h-7 w-7" />
            </button>
          ))}
        </div>
      )}
    </CX>
  );
};
