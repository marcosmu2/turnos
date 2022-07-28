import {React, Fragment, useEffect} from 'react';
import Shifts from './Shifts';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../../actions/clientsActions';
import { getArrayTimeAction, getShiftsAction } from '../../actions/shiftsActions';

let turnos=[
  {
        "hora": "08:00",
        "cancha": "1",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 1,
         "fecha": "2022-07-21" 
       }
     },
     {
        "hora": "08:00",
        "cancha": "2",
        "shift": null
     },
     {
        "hora": "09:30",
        "cancha": "1",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 1,
         "fecha": "2022-07-21" 
       }
     },
     {
        "hora": "09:30",
        "cancha": "2",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 2,
         "fecha": "2022-07-21" 
       }
     },
     {
        "hora": "11:00",
        "cancha": "1",
        "shift":null
     },
     {
        "hora": "11:00",
        "cancha": "2",
        "shift": null
     },
     {
        "hora": "12:30",
        "cancha": "1",
        "shift": null
     },
     {
        "hora": "12:30",
        "cancha": "2",
        "shift": null
     },
     {
        "hora": "14:00",
        "cancha": "1",
        "shift": null
     },
     {
        "hora": "14:00",
        "cancha": "2",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 2,
         "fecha": "2022-07-21" 
       }
     },
     {
        "hora": "15:30",
        "cancha": "1",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 1,
         "fecha": "2022-07-21" 
       }
     },
     {
        "hora": "15:30",
        "cancha": "2",
        "shift": null
     },
     {
        "hora": "17:00",
        "cancha": "1",
        "shift":null
     },
     {
        "hora": "17:00",
        "cancha": "2",
        "shift": null
     },
     {
        "hora": "19:30",
        "cancha": "1",
        "shift": null
     },
     {
        "hora": "19:30",
        "cancha": "2",
        "shift":{
         "_id": "62d967b73f5db33f06384f4a",
         "horaEntrada": "09:30",
         "horaSalida": "11:00",
         "client":"6282b8756eea2637bfb605e0",
         "idCancha": 2,
         "fecha": "2022-07-21" 
       }
     }
  ]
  
export default function TableShifts() {

  const dispatch = useDispatch();
  const entities = useSelector(state => state.shifts.entities);
  const entitiesName = useSelector(state => state.shifts.entitiesName);
  const shifts = useSelector(state => state.shifts.shifts);
  const start = useSelector(state => state.shifts.start);
  const end = useSelector(state => state.shifts.end);
  const date = useSelector(state => state.shifts.date);
  const arrayTime = useSelector(state => state.shifts.arrayTime);
  
  var rows = [];
  for (let i = 1; i < entities+1; i++) {
      rows.push(
        <th scope="col" key={i}>{entitiesName} {i}</th>
      );
  }

  useEffect(() => {
    dispatch(getClientsAction());
    
    dispatch(getArrayTimeAction(start, end));
    // dispatch( getShiftsAction(date));
    //eslint-disable-next-line
  }, [shifts])


  // useEffect(() => {
  //   console.log("useeffect");

  // }, [])
  

  var columns = [];
  let agregar = 1;

  for (let i = 1; i < entities+1; i++) {
      turnos.map(turno => {
          if(turno.shift != null){
              columns.push(
                  <td key={turno.hora+turno.cancha} >
                      <div className="d-grid gap-2">
                          <button className='btn btn- btn-success py-3'
                      >{turno.shift.client}</button>
                      </div>
                      
                  </td>)
          }else{
              columns.push(
                  <td key={turno.hora+turno.cancha}>
                      <div className="d-grid gap-2">
                          <button className='btn btn-outline-primary py-3'
                      >Agregar turnos</button>
                      </div>
                  </td>)
          }
      })
  }

  return (
    <Fragment>
    <h2 className='text-center'>Listado de Turnos</h2>
    <table className='table table-striped'>
      <thead className=''>
        <tr>
          <th scope="col">Horario de Entrada</th>
          {rows}
        </tr>
      </thead>
      <tbody>
        {arrayTime.length === 0 ? 
          <tr>
            <td>No hay turnos</td>
            <td></td>
            <td></td>
          </tr> : 
          (arrayTime.map(hour => (

            <tr key={hour}>
              <td>{hour}</td>
              <Shifts
                hour = {hour}
              />
            </tr>
            
          ))
        )}
        
      </tbody>
    </table>
  </Fragment>
  );
}
