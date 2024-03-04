import { useCallback, useEffect, useState } from "react";
import { Section } from "src/componentes";
import { useTheme } from "src/hooks";

interface ISectionCarousel {
  id?: string;
  imagens: string[];
}

export const SectionCarousel = ({ id, imagens }: ISectionCarousel) => {
  const { tema } = useTheme();
  const [indiceImagem, setIndiceImagem] = useState(0);

  const avancarImagem = useCallback(() => {
    setIndiceImagem((a) => (a + 1) % imagens.length);
  }, [imagens.length]);

  const retrocederImagem = useCallback(() => {
    setIndiceImagem((a) => (a - 1 + imagens.length) % imagens.length);
  }, [imagens.length]);

  const selecionarImagem = (index: number) => {
    setIndiceImagem(index);
  };

  useEffect(() => {
    const intervalId = setInterval(avancarImagem, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [indiceImagem, avancarImagem]);

  const imagemAtual = imagens[indiceImagem];

  return (
    <Section className="relative overflow-hidden p-8">
      <div className="relative h-96 w-full" id={id}>
        <img
          src={imagemAtual}
          alt={`Imagem ${indiceImagem + 1}`}
          className="h-96 w-full transform rounded-md object-fill"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform">
        {[...Array(imagens.length)].map((_, index) => (
          <span
            key={index}
            onClick={() => selecionarImagem(index)}
            className={`mx-1 inline-block h-4 w-4 -translate-y-5 cursor-pointer rounded-full carousel-${tema} ${index === indiceImagem ? "opacity-100" : "opacity-50"
              }`}
          />
        ))}
      </div>
      <button
        onClick={retrocederImagem}
        className={`absolute left-12 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full carousel-${tema} p-2 text-white`}
      >
        {"<"}
      </button>
      <button
        onClick={avancarImagem}
        className={`absolute right-12 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full carousel-${tema} p-2 text-white`}
      >
        {">"}
      </button>
    </Section>
  );
};
