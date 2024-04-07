import React from "react";
import { BetweenContainer } from "./styles";
import { CardBetweenProps } from "./types";

function CardBetween({ children, ...rest }: CardBetweenProps) {
  return <BetweenContainer {...rest}>{children}</BetweenContainer>;
}

export default CardBetween;
