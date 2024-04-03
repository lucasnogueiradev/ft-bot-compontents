import { ContainerImage } from "./styles";
import { ImageProps } from "./types";

const Image = ({ src, alt }: ImageProps) => {
  return (
    <ContainerImage>
      <Image src={src} alt={alt} />
    </ContainerImage>
  );
};

export { Image };
