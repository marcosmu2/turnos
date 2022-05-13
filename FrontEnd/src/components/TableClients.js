import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, phone, phone2, adress) {
  return { name, phone, phone2, adress };
}

const rows = [
  createData('Marcos Muñoz', 35724562341, 35724564569, "San Juan 123"),
  createData('Matias Fernandez', 35724564569, "", "Marconi 1698"),
  createData('Juan Sanchez', 35724578323, "", ""),
  createData('Emanuel Fernandez', 35724562154, 3572457823, ""),
  createData('Fabio Valdez', 35724563215, "", ""),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre y Apellido</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Teléfono Alternativo</TableCell>
            <TableCell align="right">Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.phone2}</TableCell>
              <TableCell align="right">{row.adress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
