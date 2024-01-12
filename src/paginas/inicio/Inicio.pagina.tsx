import { useTranslation } from "react-i18next";
import { FlexCol, SectionBanner, SectionCard, SectionContato } from "src/componentes";
import { SectionDuvidas } from "./SectionDuvidas";

export const Inicio = () => {
  const { t: tradutor } = useTranslation();
  const t = (t: string) => tradutor(`inicio.${t}`);

  const card = [
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
    },
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
    },
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
    },
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
    },
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
    },
  ];

  const card2 = [
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
      botao: true,
      rota: "https://wa.me/5512982435638",
    },
    {
      titulo: t("teste"),
      descricao:
        t("cardDescricao"),
      imagem: "/projeto/foto.png",
      botao: true,
      rota: "https://wa.me/5512982435638",
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionBanner
        imagem="/projeto/banner.webp"
        titulo="Fábrica de Software"
        descricao={t("bannerDescricao")}
        rota="https://wa.me/5512982435638"
      />
      <SectionCard
        titulo="Fábrica de Software"
        descricao={t("sectionCardDescricao")}
        botao={t("cardBotao")}
        rota="https://wa.me/5512982435638"
        card={card}
        id="card1"
      />
      <SectionDuvidas id="duvidas" />
      <SectionCard card={card2} id="card2" rota="https://wa.me/5512982435638" />
      <SectionContato id="contato" titulo={t("contatoTitulo")} />
    </FlexCol>
  );
};
