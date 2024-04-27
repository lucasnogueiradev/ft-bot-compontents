import React, { useState } from "react";
import { HeaderContainer, HeaderContent } from "./styles";
import IconFaUser from "../Layout/Icons/IconFaUser";
import { Toggle } from "../../Toggle";
import dark from "../../styles/themes/Dark";
import light from "../../styles/themes/Light";
import { ITheme } from "../../contexts/ThemeProvider";

const Header = () => {
  const [theme, setThemes] = useState<ITheme>(dark);
  const handleChangeTheme = () => {
    if (theme !== undefined) {
      const newTheme = theme.title === "dark" ? light : dark;
      setThemes(newTheme);
      if (newTheme.title === "dark") {
        localStorage.setItem("@Atend-Pro:theme", JSON.stringify(dark));
      } else if (newTheme.title === "light") {
        localStorage.setItem("@Atend-Pro:theme", JSON.stringify(light));
      }
    }
  };
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <IconFaUser size={""} />
          <Toggle
            checked={theme.title === "dark"}
            onChange={handleChangeTheme}
          />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};
export default Header;
