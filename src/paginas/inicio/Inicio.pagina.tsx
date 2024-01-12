import { FlexCol, SectionBanner, SectionCard, SectionContato } from "src/componentes";
import { SectionDuvidas } from "./SectionDuvidas";

export const Inicio = () => {
  const card = [
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
    },
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
    },
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
    },
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
    },
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
    },
  ];

  const card2 = [
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
      botao: true,
      rota: "https://wa.me/5512982435638"
    },
    {
      titulo: "Teste",
      descricao:
        "Este card é apenas uma demonstração de como possivelmente poderá ficar o seu site",
      imagem: "/projeto/foto.png",
      botao: true,
      rota: "https://wa.me/5512982435638"
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionBanner
        imagem="/projeto/banner.webp"
        titulo="Fábrica de Software"
        descricao="A fábrica de software é um site modelo para demonstração de como ficaria o site one page institucional do cliente"
        botao="Tente seu orçamento de site por aqui"
        rota="https://wa.me/5512982435638"
        id="inicio"
      />
      <SectionCard
        titulo="Fábrica de Software"
        descricao="A fábrica de software é um centro especializado que utiliza processos industriais e metodologias ágeis para desenvolver soluções de software inovadoras e personalizadas, atendendo às necessidades específicas dos clientes."
        botao="Tente seu orçamento de site por aqui"
        rota="https://wa.me/5512982435638"
        card={card}
        id="card1"
      />
      <SectionDuvidas
        id="duvidas"
      />
      <SectionCard card={card2} id="card2" rota="https://wa.me/5512982435638" />
      <SectionContato id="contato" />
    </FlexCol>
  );
};
