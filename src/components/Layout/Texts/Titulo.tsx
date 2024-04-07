import React from "react";
import { TitleContainer } from "./styles";
import { TitleProps } from "./types";

const Titulo = ({ title, center, size, ...rest }: TitleProps) => {
  return (
    <TitleContainer style={{ textAlign: "center", fontSize: size }} {...rest}>
      {title}
    </TitleContainer>
  );
};

export default Titulo;
