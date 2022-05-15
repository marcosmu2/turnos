import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function BasicTable() {

  const [clients, setClient] = useState([]);
  const [id, setId] =   useState("");

  useEffect(() => {
    axios.get('http://localhost:4001/api/client/')
      .then(res => {
        console.log(res.data)
        setClient(res.data);
  
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  axios.delete(`http://localhost:4001/api/client/delete?id=${id}`)
      .then(res => {
        setClient(res);
  
      })
      .catch(err => {
        console.log(err);
      })
  
  // function createData(name, phone, phone2, adress) {
  //   return { name, phone, phone2, adress };
  // }
  
  // const rows = [
  //   createData('Marcos Muñoz', 35724562341, 35724564569, "San Juan 123"),
  //   createData('Matias Fernandez', 35724564569, "", "Marconi 1698"),
  //   createData('Juan Sanchez', 35724578323, "", ""),
  //   createData('Emanuel Fernandez', 35724562154, 3572457823, ""),
  //   createData('Fabio Valdez', 35724563215, "", ""),
  // ];
  
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
          {/* {clients.map((client) => (
            <TableRow
              key={client.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell align="right">{client.phone}</TableCell>
              <TableCell align="right">{client.phone2}</TableCell>
              <TableCell align="right">{client.adress}</TableCell>
              <TableCell align="right">{client.interest}</TableCell>
            </TableRow>
          ))} */}
          {clients.map((row) => (
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

// const clientes = {"clientes":
// [
//     {"name": "Matias",
//     "phone": "35727662641",
//     "phone2": "35727662641",
//     "address": "Marconi 1698",
//     "interest": true
//     },
//     {"name": "Marcos",
//     "phone": "35727662641",
//     "phone2": "",
//     "address": "Tucuman 1698",
//     "interest": false
//     },
//     {"name": "Juan",
//     "phone": "35727662641",
//     "phone2": "",
//     "address": "",
//     "interest": null
//     },
//     {"name": "Pato",
//     "phone": "35727662641",
//     "phone2": "",
//     "address": "Alem 1698",
//     "interest": false
//     }
// ]}
