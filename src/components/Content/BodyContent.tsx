import React from "react";
import { ContainerBody } from "./styles";

interface Ipros {
  children: React.ReactNode;
}
const ContentBody = ({ children }: Ipros) => {
  return <ContainerBody>{children}</ContainerBody>;
};

export default ContentBody;
