// BotaoTrocarTema.tsx
import { Cloud, Moon, Star, Sun } from "@phosphor-icons/react";
import { useTheme } from "src/hooks";
import { ITheme } from "src/interfaces";

export const ButtonChangeTheme = () => {
  const { theme: selectedTheme, setTheme } = useTheme();
  const options: { theme: keyof ITheme; icone: JSX.Element }[] = [
    { theme: "claro", icone: <Sun size="20px" weight="fill" className="text-icone-claro" /> },
    { theme: "escuro", icone: <Moon size="20px" weight="fill" className="text-icone-escuro" /> },
    { theme: "estrela", icone: <Star size="20px" weight="fill" className="text-icone-estrela" /> },
    { theme: "nuvem", icone: <Cloud size="20px" weight="fill" className="text-icone-nuvem" /> },
  ];

  const alternarTheme = (newTheme: keyof ITheme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      type="button"
      className={`
        flex
        h-fit
        w-10
        justify-center
        rounded-6
        border-1
        p-1
        botao_trocar_tema-${selectedTheme}
      `}
      onClick={() => {
        const proximoThemeIndex =
          (options.findIndex((theme) => theme.theme === selectedTheme) + 1) % options.length;
        alternarTheme(options[proximoThemeIndex].theme);
      }}
    >
      {options.find((opcao) => opcao.theme === selectedTheme)?.icone}
    </button>
  );
};
