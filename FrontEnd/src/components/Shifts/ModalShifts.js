import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

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

    //State combobox horario entrada
    const [checkIn, setCheckIn] = useState('seleccion')
    // const [checkOut, setCheckOut] = useState('')
    const [clients, setClient] = useState([]);


    // const handleCheckOut = (e) =>{
    //     setShift({
    //         ...shift,
    //         [e.target.name]: e.target.value,
    //     })
    // };

    const [idClient, setIdClient] = useState('seleccion')

    //State modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setShift({}); 
        setCheckIn("seleccion"); 
        setNewTime('');
        setPhone('');
        setDate('')
    }

    const [date, setDate] = useState("")
    const handleDate = (e) => {
        setDate(
            e.target.name= e.target.value
        )
    }
    //State form
    const [shift, setShift ] = useState({})

    // const handleChange = (e) => {
    //     setShift({
    //         ...shift,
    //         [e.target.name]: e.target.value,
    //     })
    // };

    useEffect(() => {
        axios.get('http://localhost:4001/api/client/')
          .then(res => {
            setClient(res.data);
      
          })
          .catch(err => {
            console.log(err);
          })
    }, [setIdClient])

    //State para llenar el valor de la salida
    const [newTime, setNewTime] = useState('')
    const [phone, setPhone] = useState('')
    
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

    function phoneClient(id){

        if(id === "seleccion"){
            setPhone("")
        }else{
            const resultado = clients.find( e => e._id === id );
            setPhone(resultado.phone)
        }
    }

    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();
        let completeShift = {
            date: date.value.split("-").reverse().join("-"),
            name: idClient,
            telefono: phone,
            entrada: checkIn,
            salida: newTime
        };

        console.log(completeShift);
        setOpen(false);
        setShift({});
        setCheckIn("seleccion"); 
        setNewTime('');
        setPhone("");
        setDate('');
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
                                onClick={handleClose}>x
                            </button>
                        </div> 
                        <form 
                            onSubmit={handleSubmit} 
                            className='container'
                        >
                            <h4 className="text-center mt-4">Turnos</h4>
                            <h5>Cancha 1</h5>
                            <div className='row'>
                                <div className='col-12'>
                                    <label htmlFor="date">Fecha</label>
                                    <input 
                                        type="date" 
                                        id="date" 
                                        name="date"
                                        value={date}
                                        className='form-control'
                                        onChange={handleDate}
                                    />
                                </div>
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
                                        id="checkOut"
                                        name="checkOut"
                                        value={newTime}
                                        className="form-control mb-2"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                <label htmlFor="name">Cliente:</label>
                                    <select 
                                        name="select"
                                        id="name"
                                        className='form-control mb-2'
                                        defaultValue="seleccion"
                                        onChange={(e) => {setIdClient(e.target.value); phoneClient(e.target.value)}}>
                                        <option value="seleccion">Seleccione</option>
                                        {clients.map((client) =>(
                                            <option 
                                                key={client._id}
                                                value={client._id}>{client.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Teléfono"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        className="form-control mb-2"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-primary" type="submit">Reservar</button>
                                <button className="btn btn-danger ms-2" onClick={handleClose}>Cancelar</button>
                            </div>
                            
                        </form>
                    </div>  
                </div>
            }
    </Fragment>
  );
}