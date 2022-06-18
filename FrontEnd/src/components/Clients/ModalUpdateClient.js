import React, { Fragment, useState } from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import { updateClientAction } from '../../actions/clientsActions';

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
        // paddingTop: 30,
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

export default function ModalClients(props) {

    const client = useSelector((state) => state.clients.clientUpdate);
    const dispatch = useDispatch()

    const [name, setName] = useState(client.name);
    const [phone, setPhone] = useState(client.phone);
    const [phone2, setPhone2] = useState(client.phone2);
    const [address, setAddress] = useState(client.address);
    const [interest, setInterest] = useState(client.interest);
    
    //State modal

    const [open, setOpen] = useState(props.state);
    const handleClose = () => {
        setOpen(false);
        props.handleModal(false);
        setHiddenName(false);
        setHiddenPhone(false);
    }

    const[hiddenName, setHiddenName] = useState(false);
    const[hiddenPhone, setHiddenPhone] = useState(false);

    //acceder al state
    // const loading = useSelector((state) => state.clients.loading);
    // const error = useSelector((state) => state.clients.error);

    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();


        //validar
        // if(name.trim() === '' || phone.trim() !== ''){
            if(name.trim() === ''){
                setHiddenName(true);
            }
            if(phone.trim() === ''){
                setHiddenPhone(true);
            }
            
        var editedClient={
            _id: client._id,
            name: name,
            phone: phone,
            phone2: phone2,
            address: address,
            interest: interest
        };

        dispatch(updateClientAction(editedClient))
        
        props.handleModal(false);
        
    }


  return (
    <Fragment>
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
                            onSubmit={(e) =>{handleSubmit(e);}} 
                            className='container px-4'
                        >
                            <h4 className="text-center mb-3 mt-4">Cliente</h4>
                            <div className='row'>
                                <div className='col-12'>
                                    {hiddenName === false ? null : <p className='text-danger m-0'> * Debe tener un nombre</p>}
                                    <input 
                                        type="text"
                                        placeholder="Nombre"
                                        id="name"
                                        name="name"
                                        value={name}
                                        className="form-control mb-2"
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className='col-12'>
                                    {hiddenPhone === false ? null : <p className='text-danger m-0'> * Debe tener un Teléfono</p>}
                                    <input 
                                        type="number"
                                        placeholder="Teléfono"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        className="form-control mb-2"
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input 
                                        type="number"
                                        placeholder="Teléfono Alternativo"
                                        id="phone2"
                                        name="phone2"
                                        value={phone2}
                                        className="form-control mb-2"
                                        onChange={e => setPhone2(e.target.value)}
                                    />
                                </div>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Dirección"
                                        id="address"
                                        name="address"
                                        value={address}
                                        className="form-control mb-2"
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-6'>
                                    <label htmlFor="interest">Interesado en noticias:</label>
                                </div>
                                <div className='col-6 ps-0'>
                                    <input 
                                        type="checkbox" 
                                        id='interest'
                                        name={interest}
                                        onChange={e => setInterest(e.target.checked)}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-primary" type="submit">Guardar</button>
                                <button className="btn btn-danger ms-2" onClick={handleClose}>Cancelar</button>
                            </div>
                            
                        </form>
                    </div>  
                </div>
            }
    </Fragment>
  );
}