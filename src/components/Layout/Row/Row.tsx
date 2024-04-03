import React from "react";
import { RowContainer } from "./styles";
import { RowProps } from "./types";

const Row = ({ children }: RowProps) => {
  return <RowContainer>{children}</RowContainer>;
};

export default Row;
