import React, { Fragment, useState } from 'react';
import ModalShifts from './components/Shifts/ModalShifts';
import TableShifts from './components/Shifts/TableShifts';

import { useDispatch, useSelector } from 'react-redux';
import {getShiftsAction} from './actions/shiftsActions'

function ShiftsView() {

    const start = useSelector(state => state.shifts.start);
    const end = useSelector(state => state.shifts.end);
    const dispatch = useDispatch();

    let arrayTime = [];

    function schedule(){

        var time = new Date();  
        time.setHours(start,0,0,0);
      
                        //devuelve solo fecha y hora formateada
        arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
        
        var hours = time.getHours();
      
        while(hours < end){
          hours = hours + 1.5;
          time.setMinutes(time.getMinutes()+90);
      
          arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
        }
        
        return arrayTime;
    }
      
    schedule();
    
    const[filterDate, setFilterDate] = useState((new Date()).toISOString().slice(0,10));
    const handleDate = (e) => {
        setFilterDate(
            e.target.name= e.target.value
        )   

        dispatch(getShiftsAction(e.target.value))
    }

    return (  
        <Fragment>
            <h2 className='text-center'>Turnos</h2>
            <div className='container m-0'>
                <div className='row'>
                    <div className='col-12'>
                        <input 
                            type="date" 
                            id="filterDate" 
                            name="filterDate"
                            value={filterDate}
                            className='form-control'
                            onChange={handleDate} />
                    </div>
                    <div className='col-12 my-3'>
                        <ModalShifts arrayTime={arrayTime}></ModalShifts>
                    </div>
                </div>
            </div>

            <TableShifts arrayTime={arrayTime}></TableShifts>
        </Fragment>
    );
}

export default ShiftsView;