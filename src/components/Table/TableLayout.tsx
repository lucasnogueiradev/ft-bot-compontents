import { Fab } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "./stylesMui";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Iimport {
  number: string;
  caption: string;
  url: string;
}

interface TableProps {
  data: any[];
  columns: string[];
}

const TableMui = ({ columns, data }: TableProps) => {
  const [importE, setImportE] = useState<Iimport[]>([]);

  return (
    <Container>
      <div className="tbody-container">
        <TableContainer
          sx={{ backgroundColor: "transparent", border: "none" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead
              sx={{
                borderBottom: "2px solid #6e6b7b",
                borderTop: "2px solid #6e6b7b",
              }}
            >
              <TableRow
                style={{
                  color: "#6e6b7b",
                }}
              >
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    style={{
                      color: "#6e6b7b",
                      border: "none",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody className="tableBody">
              {data.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((column, columnIndex) => (
                    <TableCell
                      key={columnIndex}
                      className="tableCell"
                      size="small"
                    >
                      {row[column]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default TableMui;
