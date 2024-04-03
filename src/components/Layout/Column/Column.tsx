import React from "react";
import { ColumnContainer } from "./styles";
import { ColumnProps } from "./types";
function Column({ children }: ColumnProps) {
  return <ColumnContainer>{children}</ColumnContainer>;
}

export default Column;
