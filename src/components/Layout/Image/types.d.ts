import React from "react";

export type ImageProps = {
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  alt: string;
  width?: string;
  height?: string;
};
