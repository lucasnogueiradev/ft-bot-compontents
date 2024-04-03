import React from "react";
import { TextContainer } from "./styles";
import { TextTituloProps } from "./types";
const Text = ({ text, size }: TextTituloProps) => {
  return <TextContainer style={{ fontSize: size }}>{text}</TextContainer>;
};

export default Text;
