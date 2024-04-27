import React from "react";
import { StyledTable, StyledHeader, StyledCell } from "./styles";

// Definindo as propriedades do componente
interface TableProps {
  data: any[];
  columns: string[];
}

// Definindo o componente
const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <StyledHeader key={index}>{column}</StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <StyledCell key={columnIndex}>{row[column]}</StyledCell>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
