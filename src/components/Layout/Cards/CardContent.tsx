import React from "react";
import { ContentContainer, Content } from "./styles";
import { CardContentProps } from "./types";

function CardContent({
  children,
  contentSize,
  color,
  containerSize,
}: CardContentProps) {
  return (
    <ContentContainer style={{ width: containerSize, background: color }}>
      <Content style={{ width: contentSize }}>{children}</Content>
    </ContentContainer>
  );
}

export default CardContent;
