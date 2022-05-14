import React, { Fragment } from 'react';
import MyDatePicker from './components/DataPicker';
import ModalShifts from './components/ModalShifts';
import MyTableShifts from './components/TableShifts';

function Shifts() {

    let arrayTime = [];


    function horario(){

        var time = new Date();  
        time.setHours(8,0,0,0);
      
                        //devuelve solo fecha y hora formateada
        arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
        
        var hours = time.getHours();
      
        while(hours < 23){
          hours = hours + 1.5;
          time.setMinutes(time.getMinutes()+90);
      
          arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
        }
        
        return arrayTime;
    }
      
      horario();

    return (  
        <Fragment>
            <h2 className='text-center'>Turnos</h2>
            <div className='container m-0'>
                <div className='row'>
                    <div className='col-12'>
                        <MyDatePicker></MyDatePicker>
                    </div>
                    <div className='col-12 my-3'>
                        <ModalShifts arrayTime={arrayTime}></ModalShifts>
                    </div>
                </div>
            </div>

            <MyTableShifts arrayTime={arrayTime}></MyTableShifts>
        </Fragment>
    );
}

export default Shifts;