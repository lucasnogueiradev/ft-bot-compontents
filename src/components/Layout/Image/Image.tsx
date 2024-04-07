import React from "react";
import { ContainerImage, Image } from "./styles";
import { ImageProps } from "./types";

const Img = ({ ...rest }: ImageProps) => {
  return (
    <ContainerImage>
      <Image {...rest} />
    </ContainerImage>
  );
};

export default Img;
