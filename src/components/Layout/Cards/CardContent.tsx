import React from "react";
import { ContentContainer, Content } from "./styles";
import { CardContentProps } from "./types";

function CardContent({
  contentSize,
  children,
  containerSize,
  ...rest
}: CardContentProps) {
  return (
    <ContentContainer
      style={{ width: containerSize, height: "auto" }}
      {...rest}
    >
      <Content style={{ width: contentSize }}>{children}</Content>
    </ContentContainer>
  );
}

export default CardContent;
