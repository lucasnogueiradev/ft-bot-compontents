import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../contexts/ThemeProvider";

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}
export default useTheme;
