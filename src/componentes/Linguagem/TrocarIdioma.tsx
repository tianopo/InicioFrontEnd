import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LocalStorage } from "src/utils/localStorage";
import { CX } from "../Tags/ConteudoX";
import { TX } from "../Tags/TextoX";

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
  }
  const localStorage = new LocalStorage();
  const { t, i18n } = useTranslation();
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
      <CX
        tipo="div"
        className="relative inline-block duration-300 w-auto">
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className={`
            flex
            w-16
            rounded-6
            border-1
            border-solid
            border-borda
            bg-input
            pr-4
            pl-6
            items-center
            justify-between
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
          {menuAberto ? <CaretDown size={'16'} /> : <CaretRight size={'16'} />}
        </button>
        {menuAberto && (
          <CX
            tipo="div"
            className="
          absolute
          w-full
          rounded-6
          bg-white
          shadow-lg
          ">
            {opcoes.map((opcao) => (
              <button
                key={opcao.valor}
                className="
                hover:bg-selecionado
                hover:rounded-6
                flex
                justify-center
                px-6
                w-full
                "
                onClick={() => handleChangeIdioma(opcao.valor)}
              >
                <img src={opcao.flag} alt={opcao.valor} className="h-8 w-8" />
              </button>
            ))}
          </CX>
        )}
      </CX>
    </CX>
  );
};
