import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Paper,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import React, { useState } from 'react';
import CustomTypography from './CustomTypography';

interface CustomExpandableTableProps<T> {
  rows: T[];
  columns: string[];
  getRowId: (row: T) => string | number;
  renderMainRow: (
    row: T,
    toggle: () => void,
    isOpen: boolean,
  ) => React.ReactNode;
  renderCollapseContent: (row: T) => React.ReactNode;
}

export function CustomExpandableTable<T>({
  rows,
  columns,
  getRowId,
  renderMainRow,
  renderCollapseContent,
}: CustomExpandableTableProps<T>) {
  const [openRows, setOpenRows] = useState<Record<string | number, boolean>>(
    {},
  );

  const toggleRow = (id: string | number) => {
    setOpenRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <CustomTypography variant="h5" textAlign="center" mt={2}>
        Lista de Registros
      </CustomTypography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
            <TableCell sx={{ textAlign: 'end' }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const rowId = getRowId(row);
            const isOpen = openRows[rowId] || false;

            return (
              <React.Fragment key={rowId}>
                <TableRow>
                  <TableCell>
                    <IconButton size="small" onClick={() => toggleRow(rowId)}>
                      {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                  </TableCell>
                  {renderMainRow(row, () => toggleRow(rowId), isOpen)}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={columns.length + 2}
                  >
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 2 }}>{renderCollapseContent(row)}</Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
