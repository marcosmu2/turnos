import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MyTableShifts(props) {

  // let arrayTime = [];

  // function horario(){

  //   var time = new Date();  
  //   time.setHours(8,0,0,0);

  //                   //devuelve solo fecha y hora formateada
  //   arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
    
  //   var hours = time.getHours();

  //   while(hours < 23){
  //     hours = hours + 1.5;
  //     time.setMinutes(time.getMinutes()+90);

  //     arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
  //   }
    
  //   return arrayTime;
  // }

  // horario();

  function createData(time, client1, client2) {

    return { time, client1, client2 };
  }

  var rows = props.arrayTime.map(x => {
    return createData(x, "cliente1", "cliente2");
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario Entrada</TableCell>
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
              <TableCell>
                <div className='d-grid gap-2'>
                  <button className='btn btn-success'>Cliente 1</button>  
                </div>
              </TableCell>
              <TableCell>
                <div className='d-grid gap-2'>
                  <button className='btn btn-success'>Cliente 2</button>  
                </div> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
