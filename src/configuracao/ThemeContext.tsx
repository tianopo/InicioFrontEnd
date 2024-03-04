import React, { ReactNode, createContext, useState } from "react";
import { LocalStorage } from "src/utils";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const localStorage = new LocalStorage();
  const beginTheme = localStorage.get("theme") || "claro";
  const [theme, setTheme] = useState(beginTheme);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
