import React from "react";
import { ContainerWrapper } from "./styles";
import { CardContainerProps } from "./types";

const Container = ({ children, ...rest }: CardContainerProps) => {
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};

export default Container;
