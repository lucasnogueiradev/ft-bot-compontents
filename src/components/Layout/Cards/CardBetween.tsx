import React from "react";
import { BetweenContainer } from "./styles";
import { CardBetweenProps } from "./types";

function CardBetween({ children }: CardBetweenProps) {
  return <BetweenContainer>{children}</BetweenContainer>;
}

export default CardBetween;
