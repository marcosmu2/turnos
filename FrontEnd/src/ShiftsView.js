import React, { Fragment, useState, useEffect } from 'react';
import ModalShifts from './components/Shifts/ModalShifts';
import TableShifts from './components/Shifts/TableShifts';

import { useDispatch, useSelector } from 'react-redux';
import { getShiftsAction, updateDateAction } from './actions/shiftsActions'

function ShiftsView() {

    const date = useSelector(state => state.shifts.date);
    const dispatch = useDispatch();

    const handleDate = (e) => {
        
        dispatch(updateDateAction(e.target.value))
        dispatch(getShiftsAction(e.target.value))
    }

    useEffect(() => {

        dispatch(getShiftsAction(date));

    }, [])
    
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
                            value={date}
                            className='form-control'
                            onChange={handleDate} />
                    </div>
                </div>
            </div>

            <TableShifts></TableShifts>
        </Fragment>
    );
}

export default ShiftsView;