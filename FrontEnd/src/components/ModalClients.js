import React, { Fragment, useEffect, useState } from 'react';
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

    //State modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //State form
    const [client, setClient ] = React.useState({})

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        })
    };
    
    const handleCheck = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.checked,
        })

        
    };

    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();
        console.log(client);
        

        axios.post('http://localhost:4001/api/client/new', client)
        .then(function (res) {
        console.log(res);
        })
        .catch(function (err) {
        console.log(err);
        });

        setOpen(false);
        setClient({});
    }


  return (
    <Fragment>
        <button className='btn btn-primary' onClick={handleOpen}>Agregar Cliente</button>
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
                                    <input 
                                        type="text"
                                        placeholder="Nombre"
                                        id="name"
                                        name="name"
                                        value={client.name}
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
                                        value={client.phone}
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Teléfono Alternativo"
                                        id="phone2"
                                        name="phone2"
                                        value={client.phone2}
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Dirección"
                                        id="address"
                                        name="address"
                                        value={client.address}
                                        className="form-control mb-2"
                                        onChange={handleChange}
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
                                        name='interest'
                                        onChange={handleCheck}/>
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