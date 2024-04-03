import React from "react";
import { TextContainer, TitleContainer, LinkContainer } from "./styles";
import { TextTituloProps, TitleProps, LinkProps } from "./types";

const Titulo = ({ title, center }: TitleProps) => {
  return (
    <TitleContainer style={{ textAlign: "center" }}>{title}</TitleContainer>
  );
};

export default Titulo;
