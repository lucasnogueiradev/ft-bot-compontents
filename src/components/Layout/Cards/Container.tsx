import React from "react";
import { ContainerWrapper } from "./styles";
import { CardContainerProps } from "./types";

const Container = ({ children }: CardContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
