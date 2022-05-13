import React, { Fragment } from 'react';
import MyDatePicker from './components/DataPicker';
import ModalShifts from './components/ModalShifts';
import MyTableShifts from './components/TableShifts';

function Shifts() {
    return (  
        <Fragment>
            <h2 className='text-center'>Turnos</h2>
            <div className='container m-0'>
                <div className='row'>
                    <div className='col-12'>
                        <MyDatePicker></MyDatePicker>
                    </div>
                    <div className='col-12 my-3'>
                        <ModalShifts></ModalShifts>
                    </div>
                </div>
            </div>

            <MyTableShifts></MyTableShifts>
        </Fragment>
    );
}

export default Shifts;