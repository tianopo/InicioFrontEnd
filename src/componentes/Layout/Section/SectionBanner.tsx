import { ReactNode } from "react";
import { ButtonOnClick } from "src/componentes/Botoes/ButtonOnClick";
import { Section } from "../Section";

export const SectionBanner = ({
  id,
  children,
  image,
  title,
  description,
  button,
  route,
}: ISectionBanner) => {
  const handleButtonClick = () => {
    window.location.href = route || "";
  };

  return (
    <Section id={id}>
      <div className="relative h-96 bg-fixed" style={{ backgroundImage: `url('${image}')` }}>
        <div className="absolute inset-0 flex min-w-0 flex-col items-start justify-center gap-3 p-12 text-center text-white">
          <img src="/projeto/logo.svg" alt={title} className="h-20 w-24" />
          {title && <h1 className="mb-4 text-justify text-36 font-bold">{title}</h1>}
          {description && (
            <p className="mb-6 max-w-full overflow-hidden text-ellipsis whitespace-pre-line text-justify text-18 md:whitespace-break-spaces">
              {description}
            </p>
          )}
          {button && route && (
            <ButtonOnClick className="text-white" onClick={handleButtonClick}>
              {button}
            </ButtonOnClick>
          )}
        </div>
        {children}
      </div>
    </Section>
  );
};

interface ISectionBanner {
  id?: string;
  children?: ReactNode;
  image: string;
  title?: string;
  description?: string;
  button?: string;
  route?: string;
}
