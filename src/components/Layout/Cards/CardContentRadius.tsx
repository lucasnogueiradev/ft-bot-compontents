import React from "react";
import { ContentContainerR, ContentR } from "./styles";
import { CardContentProps } from "./types";

function CardContentRadius({
  contentSize,
  children,
  containerSize,
  ...rest
}: CardContentProps) {
  return (
    <ContentContainerR
      style={{ width: containerSize, height: "auto" }}
      {...rest}
    >
      <ContentR style={{ width: contentSize }}>{children}</ContentR>
    </ContentContainerR>
  );
}

export default CardContentRadius;
