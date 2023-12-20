import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTema } from "src/hooks";
import { LocalStorage } from "src/utils";
import { CX } from "../Tags/ConteudoX";

export const BotaoTrocarIdioma = () => {
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
    <CX tipo="div" className="botao_trocar_idioma-div_principal">
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        onBlur={() =>
          setTimeout(() => {
            setMenuAberto(false);
          }, 100)
        }
        className={`
          botao_trocar_idioma-button_principal
          botao_trocar_idioma-${tema}
        `}
      >
        <img
          src={opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.flag}
          alt={`Bandeira de ${opcoes.find((opcao) => opcao.valor === idiomaSelecionado)?.valor}`}
          className="botao_trocar_idioma-image"
        />
        {menuAberto ? (
          <CaretDown className="botao_trocar_idioma-caret" />
        ) : (
          <CaretRight className="botao_trocar_idioma-caret" />
        )}
      </button>
      {menuAberto && (
        <div className="botao_trocar_idioma-div_menu">
          {opcoes.map((opcao) => (
            <button
              key={opcao.valor}
              className={`
                botao_trocar_idioma-button_menu
                botao_trocar_idioma-${tema}
                `}
              onClick={() => alternarIdioma(opcao.valor)}
            >
              <img src={opcao.flag} alt={opcao.valor} className="botao_trocar_idioma-image" />
            </button>
          ))}
        </div>
      )}
    </CX>
  );
};
