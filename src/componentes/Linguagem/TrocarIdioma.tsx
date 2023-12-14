import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LocalStorage } from "src/utils/localStorage";
import { CX } from "../Tags/ConteudoX";

export const TrocarIdioma = () => {
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
  const { i18n } = useTranslation();
  const [idiomaSelecionado, setIdiomaSelecionado] = useState(obterIdiomaInicial());
  const [menuAberto, setMenuAberto] = useState(false);

  const handleChangeIdioma = (novoIdioma: string) => {
    setIdiomaSelecionado(novoIdioma);
    i18n.changeLanguage(novoIdioma);
    setMenuAberto(false);
    localStorage.set("idioma", novoIdioma);
  };

  useEffect(() => {
    i18n.changeLanguage(idiomaSelecionado);
  }, [idiomaSelecionado, i18n]);

  return (
    <CX tipo="div">
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
            flex
            items-center
            justify-between
            rounded-6
            border-1
            border-solid
            border-borda
            bg-input
            pl-6
            pr-4
            font-low
            text-escrita
            outline-none
            placeholder:text-placeholder
          `}
        >
          <img
            src={opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.flag}
            alt={`Bandeira de ${opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.valor}`}
            className="h-8 w-8"
          />
          {menuAberto ? <CaretDown size={"16"} /> : <CaretRight size={"16"} />}
        </button>
        {menuAberto && (
          <div
            className="
          absolute
          w-16
          rounded-6
          bg-white
          shadow-lg
          "
          >
            {opcoes.map((opcao) => (
              <button
                key={opcao.valor}
                className="
                flex
                w-full
                justify-center
                hover:rounded-6
                hover:bg-selecionado
                "
                onClick={() => handleChangeIdioma(opcao.valor)}
              >
                <img src={opcao.flag} alt={opcao.valor} className="h-8 w-8" />
              </button>
            ))}
          </div>
        )}
      </CX>
    </CX>
  );
};
