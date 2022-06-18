import React, { Fragment } from 'react'

import { useSelector } from 'react-redux';

const Shifts = (props) => {

    const entities = useSelector(state => state.shifts.entities);
    var columns = [];

    for (let i = 1; i < entities+1; i++) {
        
        props.shifts.forEach(shift => {
            if(shift.horaEntrada === props.hour && shift.idCancha === i){
                if(shift.diaFijo !== null){
                    columns.push(
                    <td >
                        <div className="d-grid gap-2">
                            <button className='btn btn- btn-warning py-3'>{shift.client}</button>
                        </div>
                        
                    </td>)
                }else{
                    columns.push(
                    <td>
                        <div className="d-grid gap-2">
                            <button className='btn btn-success py-3'>{shift.client}</button>
                        </div>
                        
                    </td>)
                }
                
            }
        });
        if(columns.length<=1){
            columns.push(
            <td>
                <div className="d-grid gap-2">
                    <button className='btn btn-outline-primary py-3'>Agregar turnos</button>
                </div>
                
            </td>)
        }
        
    }

    return (  
        <Fragment>
                {columns}
        </Fragment>
    );
}
 
export default Shifts;