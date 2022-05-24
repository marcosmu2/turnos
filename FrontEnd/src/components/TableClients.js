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
import ModalUpdateClient from './ModalUpdateClient';



export default function BasicTable() {

  const [clients, setClient] = useState([]);
  const [id, setId] = useState("");

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openModalUpdateClient, setModalUpdateClient] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/api/client/')
      .then(res => {
        console.log(res.data);
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

  function updateClient(){
    axios.put(`http://localhost:4001/api/client/delete?id=${id}`)
        .then(res => {
          setClient(res);
    
        })
        .catch(err => {
          console.log(err);
        })
  }
  
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
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <button className='btn btn-primary' onClick={() =>{setId(row._id); setModalUpdateClient(true);}} >Editar</button>
                  <button className='btn btn-danger ms-1' onClick={() => {setId(row._id); setOpenDeleteModal(true);}}>Borrar</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openModalUpdateClient === true ? 
        <ModalUpdateClient 
          state={openModalUpdateClient} 
          handleModal={setModalUpdateClient}
          
          
          >  
        </ModalUpdateClient> : null}
      {openDeleteModal === true ? <ModalDelete state={openDeleteModal} handleModal={setOpenDeleteModal} deleteClient={deleteClient}></ModalDelete> : null}
    </Fragment>
  );
}

