import React, { Fragment, useState } from 'react';

const style = {
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        paddingBottom: 30,
        zIndex: '2',
        borderRadius: 10
        },

    background:{
        position: 'fixed',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '1'
        }
};

export default function ModalShifts(props) {

    //State combobox
    const [checkIn, setCheckIn] = useState('seleccion')
    // const [checkOut, setCheckOut] = useState('')

    const handleCheckOut = (e) =>{
        setShift({
            ...shift,
            [e.target.name]: e.target.value,
        })
    };

    //State modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //State form
    const [shift, setShift ] = useState({})

    const handleChange = (e) => {
        setShift({
            ...shift,
            [e.target.name]: e.target.value,
        })
    };

    //State para llenar el valor de la salida
    const [newTime, setNewTime] = useState('')
    
    function horario(time){

        var timeSplit = time.split(':');
        var hours = timeSplit[0];
        var minutes = timeSplit[1];

        if(minutes === "00"){
            minutes = '30';
            hours = parseInt(hours)+1;
        }else{
            minutes ="00";
            hours = parseInt(hours)+2;
        }

        if(hours < 10){
            hours = "0" + hours;
        }

        setNewTime(`${hours}:${minutes}`);
        if(time === "seleccion"){
            setNewTime("");
        } 
    }

    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();
        let completeShift = {
            name: shift.name,
            telefono: shift.phone,
            entrada: checkIn,
            salida: newTime
        };

        console.log(completeShift);
        setOpen(false);
        setShift({});
    }

  return (
    <Fragment>
        <button className='btn btn-primary' onClick={handleOpen}>Reservar Turno</button>
            {open === false ? null : 
                <div
                    style={style.background}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div style={style.modal}>
                        <div className='position-relative'>
                            <button 
                                className='btn btn-danger position-absolute end-0 me-2 mt-2'
                                onClick={() =>{handleClose(); setShift({}); setCheckIn("seleccion"); setNewTime('');}}>x
                            </button>
                        </div> 
                        <form 
                            onSubmit={handleSubmit} 
                            className='container'
                        >
                            <h4 className="text-center mt-4">Turnos</h4>
                            <h5>Cancha 1</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <label htmlFor="entrada">Entrada:</label>
                                    <select 
                                        name="select"
                                        id="entrada"
                                        className='form-control'
                                        defaultValue="seleccion"
                                        onChange={(e) => {setCheckIn(e.target.value); horario(e.target.value);}}>
                                        <option value="seleccion">Seleccione</option>
                                        {props.arrayTime.map((entrada) =>(
                                            <option 
                                                key={entrada}
                                                value={entrada}>{entrada}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="checkOut">Salida:</label>
                                    <input 
                                        type="text"
                                        // placeholder={newTime}
                                        id="checkOut"
                                        name="checkOut"
                                        value={newTime}
                                        className="form-control mb-2"
                                        // onChange={handleCheckOut}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Nombre"
                                        id="name"
                                        name="name"
                                        value={shift.name}
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Teléfono"
                                        id="phone"
                                        name="phone"
                                        value={shift.phone}
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-primary" type="submit">Reservar</button>
                                <button className="btn btn-danger ms-2" onClick={() =>{handleClose(); setShift({}); setCheckIn("seleccion"); setNewTime('');}}>Cancelar</button>
                            </div>
                            
                        </form>
                    </div>  
                </div>
            }
    </Fragment>
  );
}
