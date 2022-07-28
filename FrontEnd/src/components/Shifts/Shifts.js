import React, { Fragment, useState } from 'react'
import ModalUpdateShift from './ModalUpdateShift'

import { useSelector } from 'react-redux';
import ModalShifts from './ModalShifts';

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
          "hora": "18:30",
          "cancha": "1",
          "shift": null
       },
       {
          "hora": "18:30",
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

const Shifts = (props) => {

    const[modalUpdate, setModalUpdate] = useState(false);
    const[modalShift, setModalShift] = useState(false);
    const[shiftSelected, setShiftSelected] = useState(null);
    const[hourCheckIn, setHourCheckIn] = useState(null);
    // const[hourCheckOut, setHourCheckOut] = useState(null);
    const[entityId, setEntityId] = useState(null);

    const entities = useSelector(state => state.shifts.entities);
    const shifts = useSelector(state => state.shifts.shifts);

    var columns = [];
    let agregar = 1;

    


    for (let i = 1; i < entities+1; i++) {
        turnos.find(turno => {
            if(turno.hora === props.hour && turno.cancha === i.toString()){
                if(turno.shift != null){
                    // if(turno.shift.diaFijo !== undefined && turno.shift.diaFijo !== null){
                    //     columns.push(
                    //     <td key={shift.horaEntrada+shift.idCancha} >
                    //         <div className="d-grid gap-2">
                    //             <button className='btn btn- btn-warning py-3'
                    //             onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}
                    //         >{shift.client.name}</button>
                    //         </div>
                            
                    //     </td>)
                    // }else{
                    //     columns.push(
                    //     <td key={shift.horaEntrada+shift.idCancha}>
                    //         <div className="d-grid gap-2">
                    //             <button className='btn btn-success py-3'
                    //             onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}    
                    //         >{shift.client.name}</button>
                    //         </div>
                            
                    //     </td>)
                    // }
                    columns.push(
                        <td key={turno.hora+turno.cancha} >
                            <div className="d-grid gap-2">
                                <button className='btn btn- btn-success py-3'
                            >{turno.shift.client}</button>
                            </div>
                            
                        </td>)
                }else{
                    // columns.push(
                
                    // <td key={agregar}>
                    //     <div className="d-grid gap-2">
                    //         <button className='btn btn-outline-primary py-3'
                    //         onClick={() => {setModalShift(true); setEntityId(i); setHourCheckIn(props.hour);}}
                    //     >Agregar turnos</button>
                    //     </div>
                    // </td>)
                    columns.push(
                        <td key={turno.hora+turno.cancha}>
                            <div className="d-grid gap-2">
                                <button className='btn btn-outline-primary py-3'
                            >Agregar turnos</button>
                            </div>
                        </td>)
                }
            }
        })
    }
    
    // for (let i = 1; i < entities+1; i++) {
        
    //     shifts.forEach(shift => {
    //         if(shift.horaEntrada === props.hour && shift.idCancha === i){
    //             if(shift.diaFijo !== undefined && shift.diaFijo !== null){
    //                 columns.push(
    //                 <td key={shift.horaEntrada+shift.idCancha} >
    //                     <div className="d-grid gap-2">
    //                         <button className='btn btn- btn-warning py-3'
    //                         onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}
    //                     >{shift.client.name}</button>
    //                     </div>
                        
    //                 </td>)
    //             }else{
    //                 columns.push(
    //                 <td key={shift.horaEntrada+shift.idCancha}>
    //                     <div className="d-grid gap-2">
    //                         <button className='btn btn-success py-3'
    //                         onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}    
    //                     >{shift.client.name}</button>
    //                     </div>
                        
    //                 </td>)
    //             }
                
    //         }
    //     });
    //     if(columns.length<=1){
    //         columns.push(
                
    //         <td key={agregar}>
    //             <div className="d-grid gap-2">
    //                 <button className='btn btn-outline-primary py-3'
    //                 onClick={() => {setModalShift(true); setEntityId(i); setHourCheckIn(props.hour);}}
    //             >Agregar turnos</button>
    //             </div>
    //         </td>)
    //         agregar ++;
    //     }
        
    // }

    return (  
        <Fragment>
                {columns}
                {modalUpdate === true ? <ModalUpdateShift 
                    state={modalUpdate} 
                    handleModal={setModalUpdate} 
                    shiftSelected={shiftSelected}>
                </ModalUpdateShift> : null}
                {modalShift === true ? <ModalShifts
                    state={modalShift} 
                    handleModal={setModalShift}
                    entityId={entityId}
                    hour = {hourCheckIn}>
                </ModalShifts> : null}
        </Fragment>
    );
}
 
export default Shifts;

