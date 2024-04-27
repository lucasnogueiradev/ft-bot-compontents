import React from "react";
import { Container } from "./styles";

interface Ipros {
  children: React.ReactNode;
}
const Content = ({ children }: Ipros) => {
  return <Container>{children}</Container>;
};

export default Content;
