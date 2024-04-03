import React from "react";
import { TextContainer, TitleContainer, LinkContainer } from "./styles";
import { TextTituloProps, TitleProps, LinkProps } from "./types";
function Link({ handlePasswordClick, to, title }: LinkProps) {
  return (
    <LinkContainer onClick={handlePasswordClick} to={to}>
      {title}
    </LinkContainer>
  );
}

export default Link;
