import { FlexCol, SectionBanner, SectionCard, SectionContato } from "src/componentes";

export const Inicio = () => {
  const card = [
    {
      titulo: "Área comercial",
      descricao:
        "Atuar em áreas comerciais requer uma compreensão profunda do mercado em que a empresa está inserida, bem como do produto ou serviço oferecido.",
      imagem: "/flags/br.svg",
    },
    {
      titulo: "Área comercial",
      descricao:
        "Atuar em áreas comerciais requer uma compreensão profunda do mercado em que a empresa está inserida, bem como do produto ou serviço oferecido.",
      imagem: "/flags/br.svg",
    },
    {
      titulo: "Área comercial",
      descricao:
        "Atuar em áreas comerciais requer uma compreensão profunda do mercado em que a empresa está inserida, bem como do produto ou serviço oferecido.",
      imagem: "/flags/br.svg",
    },
    {
      titulo: "Área comercial",
      descricao:
        "Atuar em áreas comerciais requer uma compreensão profunda do mercado em que a empresa está inserida, bem como do produto ou serviço oferecido.",
      imagem: "/flags/br.svg",
    },
    {
      titulo: "Área comercial",
      descricao:
        "Atuar em áreas comerciais requer uma compreensão profunda do mercado em que a empresa está inserida, bem como do produto ou serviço oferecido.",
      imagem: "/flags/br.svg",
    },
  ];

  return (
    <FlexCol className="gap-32">
      <SectionBanner
        imagem="/flags/br.svg"
        titulo="Fábrica de Software"
        descricao="A fábrica de software é um centro especializado que utiliza processos industriais e metodologias ágeis para desenvolver soluções de software inovadoras e personalizadas, atendendo às necessidades específicas dos clientes."
        botao="Tente seu orçamento por aqui"
      />
      <SectionCard
        titulo="Fábrica de Software"
        descricao="A fábrica de software é um centro especializado que utiliza processos industriais e metodologias ágeis para desenvolver soluções de software inovadoras e personalizadas, atendendo às necessidades específicas dos clientes."
        botao="Tente seu orçamento por aqui"
        card={card}
      />
      <SectionCard card={card} />
      <SectionContato />
    </FlexCol>
  );
};
