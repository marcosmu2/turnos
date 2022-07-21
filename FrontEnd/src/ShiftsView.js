import React, { Fragment, useState, useEffect } from 'react';
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
 
    function addZeros(){
        let arrayDate = new Date().toLocaleDateString().split("/").reverse();
        let count = 0;
        arrayDate.forEach(e => {
            if(e <= 10){

                e = "0"+ e;
                arrayDate[count] = e;
            }
                
            count++;
        });
        return arrayDate.join("-");

    }

    const[filterDate, setFilterDate] = useState(new Date());
    const handleDate = (e) => {
        setFilterDate(
            e.target.name= e.target.value
        )   

        dispatch(getShiftsAction(e.target.value))
    }

    useEffect(() => {

        let today = addZeros();
        setFilterDate(today);
        dispatch(getShiftsAction(today));

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
                            value={filterDate}
                            className='form-control'
                            onChange={handleDate} />
                    </div>
                </div>
            </div>

            <TableShifts arrayTime={arrayTime} dateSelected={filterDate}></TableShifts>
        </Fragment>
    );
}

export default ShiftsView;