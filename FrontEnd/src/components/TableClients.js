import React, { Fragment, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import ModalDelete from './ModalDelete';



export default function BasicTable() {

  const [clients, setClient] = useState([]);
  const [id, setId] = useState("");

  const [open, setOpen] = useState(false);

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

  function deleteClient(){
    axios.delete(`http://localhost:4001/api/client/delete?id=${id}`)
        .then(res => {
          setClient(res);
    
        })
        .catch(err => {
          console.log(err);
        })
  }
  
  
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
    <Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre y Apellido</TableCell>
              <TableCell align="right">Teléfono</TableCell>
              <TableCell align="right">Teléfono Alternativo</TableCell>
              <TableCell align="right">Dirección</TableCell>
              <TableCell align="right">Acciones</TableCell>
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
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.phone2}</TableCell>
                <TableCell align="right">{row.adress}</TableCell>
                <TableCell align="right">
                  <button className='btn btn-primary'>Editar</button>
                  <button className='btn btn-danger ms-1' onClick={() => {setId(row._id); setOpen(true);}}>Borrar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open === true ? <ModalDelete state={open} handleModal={setOpen} deleteClient={deleteClient}></ModalDelete> : null}
    </Fragment>
  );
}

