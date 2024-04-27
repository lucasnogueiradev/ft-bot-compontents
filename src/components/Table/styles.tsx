import React from "react";
import styled from "styled-components";

// Criando o componente estilizado
export const StyledTable = styled.table`
  width: 80%;
  border-radius: 1rem;
  /* border-collapse: collapse; */
  margin: 1rem auto;
`;

export const StyledHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
