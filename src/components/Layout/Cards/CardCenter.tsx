import React from "react";
import { CenterContainer } from "./styles";
import { CardCenterProps } from "./types";

const CardCenter = ({ children }: CardCenterProps) => {
  return <CenterContainer>{children}</CenterContainer>;
};

export default CardCenter;
