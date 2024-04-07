import React from "react";
import { CenterContainer } from "./styles";
import { CardCenterProps } from "./types";

const CardCenter = ({ children, ...rest }: CardCenterProps) => {
  return <CenterContainer {...rest}>{children}</CenterContainer>;
};

export default CardCenter;
