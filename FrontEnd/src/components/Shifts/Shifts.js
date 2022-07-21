import React, { Fragment, useState } from 'react'
import ModalUpdateShift from './ModalUpdateShift'

import { useSelector } from 'react-redux';
import ModalShifts from './ModalShifts';

const Shifts = (props) => {

    const[modalUpdate, setModalUpdate] = useState(false);
    const[modalShift, setModalShift] = useState(false);
    const[shiftSelected, setShiftSelected] = useState(null);
    const[hourCheckIn, setHourCheckIn] = useState(null);
    const[hourCheckOut, setHourCheckOut] = useState(null);
    const[entityId, setEntityId] = useState(null);

    const entities = useSelector(state => state.shifts.entities);
    var columns = [];

    for (let i = 1; i < entities+1; i++) {
        
        props.shifts.forEach(shift => {
            if(shift.horaEntrada === props.hour && shift.idCancha === i){
                if(shift.diaFijo !== undefined && shift.diaFijo !== null){
                    columns.push(
                    <td >
                        <div className="d-grid gap-2">
                            <button className='btn btn- btn-warning py-3'
                            onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}
                        >{shift.client.name === undefined ? shift.clientName : shift.client.name}</button>
                        </div>
                        
                    </td>)
                }else{
                    columns.push(
                    <td>
                        <div className="d-grid gap-2">
                            <button className='btn btn-success py-3'
                            onClick={() => {setModalUpdate(true); setShiftSelected(shift)}}    
                        >{shift.client.name === undefined ? shift.clientName : shift.client.name}</button>
                        </div>
                        
                    </td>)
                }
                
            }
        });
        if(columns.length<=1){
            
            columns.push(
            <td>
                <div className="d-grid gap-2">
                    <button className='btn btn-outline-primary py-3'
                    onClick={() => {setModalShift(true); setEntityId(i); setHourCheckIn(props.hour);}}
                >Agregar turnos</button>
                </div>
                
            </td>)
        }
        
    }

    return (  
        <Fragment>
                {columns}
                {modalUpdate === true ? <ModalUpdateShift 
                    state={modalUpdate} 
                    handleModal={setModalUpdate} 
                    shiftSelected={shiftSelected} 
                    arrayTime={props.arrayTime}
                    dateSelected={props.dateSelected}>
                </ModalUpdateShift> : null}
                {modalShift === true ? <ModalShifts
                    state={modalShift} 
                    handleModal={setModalShift}
                    entityId={entityId}
                    hour = {hourCheckIn}
                    arrayTime={props.arrayTime}
                    dateSelected={props.dateSelected}>
                </ModalShifts> : null}
        </Fragment>
    );
}
 
export default Shifts;