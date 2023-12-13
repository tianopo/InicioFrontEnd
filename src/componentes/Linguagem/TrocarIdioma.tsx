import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CX } from "../Tags/ConteudoX";
import { TX } from "../Tags/TextoX";

export const TrocarIdioma = () => {
  const opcoes = [
    {
      nome: "Português",
      valor: "ptbr",
      flag: "/flags/br.svg",
    },
    {
      nome: "Inglês",
      valor: "en",
      flag: "/flags/us.svg",
    },
    {
      nome: "Francês",
      valor: "fr",
      flag: "/flags/fr.svg",
    },
  ];
  const { t, i18n } = useTranslation();
  const [idiomaSelecionado, setIdiomaSelecionado] = useState(opcoes[0].valor);
  const [menuAberto, setMenuAberto] = useState(false);

  const handleChangeIdioma = (novoIdioma: string) => {
    setIdiomaSelecionado(novoIdioma);
    i18n.changeLanguage(novoIdioma);
    setMenuAberto(false);
  };

  return (
    <CX tipo="div">
      <TX tipo="span">{t("selecioneSeuIdioma")}</TX>
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className={`
            flex
            w-40
            rounded-6
            border-1
            border-solid
            border-borda
            bg-input
            p-4
            font-low
            text-escrita
            outline-none
            duration-300
            placeholder:text-placeholder
            focus:border-primaria
          `}
        >
          {opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.nome}
          {menuAberto ? <CaretDown /> : <CaretRight />}
        </button>
        {menuAberto && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-6 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {opcoes.map((opcao) => (
                <button
                  key={opcao.valor}
                  className="p-4 hover:bg-gray-10 flex items-center"
                  onClick={() => handleChangeIdioma(opcao.valor)}
                >
                  {opcao.nome}
                  <img src={opcao.flag} alt={opcao.nome} className="w-12 h-12 ml-2" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </CX>
  );
};
