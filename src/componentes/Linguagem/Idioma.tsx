import { useTranslation } from "react-i18next";
import { ConteudoX } from "../Tags/ConteudoX";
import { TextoX } from "../Tags/TextoX";

export const Idioma = () => {
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
  const handleChangeIdioma = (e: { target: { value: string } }) => {
    const novoIdioma = e.target.value;
    i18n.changeLanguage(novoIdioma);
  };

  return (
    <ConteudoX tipo="div">
      <TextoX tipo="span">{t("selecioneSeuIdioma")}</TextoX>
      <select onChange={handleChangeIdioma}>
        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.nome}
            <img key={opcao.valor} src={opcao.flag} alt={opcao.nome} className="" />
          </option>
        ))}
      </select>
      {/* Você pode adicionar as bandeiras novamente se desejar, usar select pré pronto, ou não */}
      {/* {opcoes.map(opcao => (
        <img key={opcao.valor} src={opcao.flag} alt={opcao.nome} />
      ))} */}
    </ConteudoX>
  );
};
