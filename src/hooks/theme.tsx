import React, { createContext, useState, useContext } from "react";
import dark from "../styles/themes/Dark";
import light from "../styles/themes/Light";

export interface IThemeContext {
  toggleTheme?: () => void;
  theme: ITheme;
  children?: React.ReactNode;
}

export interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    font: string;
    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

function ProviderTheme({ children }: IThemeContext) {
  const [theme, setThemes] = useState(dark);

  const toggleTheme = () => {
    setThemes(theme.title === "dark" ? light : dark);

    if (theme.title === "dark") {
      localStorage.setItem("@Atend-Pro:theme", JSON.stringify(dark));
      setThemes(dark);
    } else if (theme.title === "light") {
      localStorage.setItem("@Atend-Pro:theme", JSON.stringify(light));
      setThemes(light);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}
export { ProviderTheme, useTheme };
