import React, { Fragment, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addNewShiftAction } from '../../actions/shiftsActions';

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
    const [fixed, setFixed] = useState(null);
    // const [clients, setClient] = useState([]);

    const dispatch = useDispatch();

    const clients = useSelector( state => state.clients.clients)

    const entitiesName = useSelector( state => state.shifts.entitiesName)
    const entities = useSelector( state => state.shifts.entities)
    const dateStore = useSelector(state => state.shifts.date);
    const arrayTime = useSelector(state => state.shifts.arrayTime);
    
    const [selectedEntity, setSelectedEntity] = useState('seleccion');
    const [options, setOptions] = useState([]);

    // var options = [];
    // for (var i = 1; i < entities+1; i++) {
    //     options.push(<option 
    //         key={i}
    //         value={i}>{entitiesName} {i}
    //     </option>);
    // }

    const [idClient, setIdClient] = useState('seleccion')
    const [clientName, setClientName] = useState('')

    // const handleClientName = (e) => {
    //     setClientName(
    //         e.target.name= e.target.value
    //     )
        
    // }
    //State modal
    const [open, setOpen] = useState(props.state);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        props.handleModal(false);
        setShift({}); 
        setCheckIn("seleccion"); 
        setSelectedEntity('seleccion')
        setNewTime('');
        setPhone('');
        setDate('')
    }
    
    const [date, setDate] = useState(dateStore)
    const handleDate = (e) => {
        setDate(
            e.target.name= e.target.value
        )
        
    }
    //State form
    const [shift, setShift ] = useState({})

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
    let completeShift;
    const addShift = (completeShift) => dispatch( addNewShiftAction(completeShift, dateStore) );
    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();
        let weekDay = new Date(date);

        if(fixed === true){
            
            addShift({
                idCancha: selectedEntity,
                client: idClient,
                clientName: clientName,
                horaEntrada: checkIn,
                horaSalida: newTime,
                diaFijo: weekDay.getDay(),
                fechaInicioFijo: date
            }
            )
        }else{
            addShift({
                fecha: date,
                idCancha: selectedEntity,
                client: idClient,
                clientName: clientName,
                horaEntrada: checkIn,
                horaSalida: newTime
            }
            )
        }
        
        setOpen(false);
        setShift({});
        setCheckIn("seleccion"); 
        setNewTime('');
        setPhone("");
        setDate('');
        // dispatch(getShiftsAction(today))
    }

    useEffect(() => {
        const opciones2= [];

        for (var i = 1; i < entities+1; i++) {
            opciones2.push(
            <option key={i} value={i}>{entitiesName} {i}</option>);
        }

        setOptions(opciones2);

        setSelectedEntity(props.entityId);
        setCheckIn(props.hour);
        horario(props.hour);
    }, [])
    

  return (
    <Fragment>
        {/* <button className='btn btn-primary' onClick={handleOpen}>Reservar Turno</button> */}
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
                            <h4 className="text-center mt-4">Reservar Turno</h4>
                            <div className='row mb-3'>
                                <div className='col-6'>
                                    <label htmlFor="fixed">Es Turno Fijo:</label>
                                </div>
                                <div className='col-6 ps-0'>
                                    <input 
                                        type="checkbox" 
                                        id='fixed'
                                        name={fixed}
                                        onChange={e => setFixed(e.target.checked)}
                                    />
                                </div>
                            </div>
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
                                        disabled
                                    />
                                </div>
                                <div className='col-12 mt-1'>
                                    <label htmlFor={entitiesName}>{entitiesName}:</label>
                                    <select 
                                        name={entitiesName}
                                        id={entitiesName}
                                        className='form-control'
                                        // defaultValue="seleccion"
                                        value= {selectedEntity}
                                        onChange={(e) => setSelectedEntity(e.target.value)}
                                        disabled>
                                        <option value="seleccion">Seleccione</option>
                                        {options}
                                    </select>
                                </div>
                                <div className='col-6 mt-1'>
                                    <label htmlFor="entrada">Entrada:</label>
                                    <select 
                                        name="select"
                                        id="entrada"
                                        className='form-control'
                                        // defaultValue="seleccion"
                                        value={checkIn}
                                        onChange={(e) => {setCheckIn(e.target.value); horario(e.target.value);}}
                                        disabled>
                                        <option value="seleccion">Seleccione</option>
                                        {arrayTime.map((entrada) =>(
                                            <option 
                                                key={entrada}
                                                value={entrada}>{entrada}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-6 mt-1'>
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
                                        onChange={(e) => {setIdClient(e.target.value); setClientName(e.target.options[e.target.selectedIndex].text); phoneClient(e.target.value)}}>
                                        <option value="seleccion">Seleccione</option>
                                        {clients.map((client) =>(
                                            <option 
                                                key={client._id}
                                                name={client.name}
                                                value={client._id}>{client.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-12 mt-1'>
                                    <input 
                                        type="text"
                                        placeholder="Tel??fono"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        className="form-control mb-2"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mt-2'>
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
