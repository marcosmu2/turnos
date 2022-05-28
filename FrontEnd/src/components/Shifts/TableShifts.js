import {React, Fragment} from 'react';

export default function TableShifts(props) {

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



  return (
    <Fragment>
    <h2 className='text-center'>Listado de Turnos</h2>
    <table className='table table-striped'>
      <thead className=''>
        <tr>
          <th scope="col">Horario de Entrada</th>
          <th scope="col">Cancha 1</th>
          <th scope="col">Cancha 2</th>
        </tr>
      </thead>
      <tbody>
        {/* {clients.length === 0 ? 'No hay clientes' : (
          clients.map(clients => (
          <Clients/>
          ))
        )} */}
        <tr>
          <td>No hay turnos</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </Fragment>
  );
}
