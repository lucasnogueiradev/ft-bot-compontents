import React from "react";
import { TextContainer } from "./styles";
import { TextProps } from "./types";
const Text = ({ text, size, ...rest }: TextProps) => {
  return (
    <TextContainer style={{ fontSize: size }} {...rest}>
      {text}
    </TextContainer>
  );
};

export default Text;
