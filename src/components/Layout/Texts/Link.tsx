import React from "react";
import { LinkContainer } from "./styles";
import { LinkProps } from "./types";

function Link({ handlePasswordClick, to, title, size }: LinkProps) {
  return (
    <LinkContainer
      onClick={handlePasswordClick}
      to={to}
      style={{ fontSize: size }}
    >
      {title}
    </LinkContainer>
  );
}

export default Link;
