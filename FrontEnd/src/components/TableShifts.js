import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let arrayTime = [];

function horario(){

  var time = new Date();  
  time.setHours(8,0,0,0);

                  //devuelve solo fecha y hora formateada
  arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
  
  var hours = time.getHours();

  while(hours < 23){
    hours = hours + 0.5;
    time.setMinutes(time.getMinutes()+30);

    arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
  }
  
  return arrayTime;
}

horario();

function createData(time, client1, client2) {

  return { time, client1, client2 };
}


export default function MyTableShifts(props) {

var rows = arrayTime.map(x => {
  return createData(x, "cliente1", "cliente2");
})
  // horario();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario</TableCell>
            <TableCell>Cancha 1</TableCell>
            <TableCell>Cancha 2</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow
              key={row.time}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>{row.client1}</TableCell>
              <TableCell>{row.client2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
