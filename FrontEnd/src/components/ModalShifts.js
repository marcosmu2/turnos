import React, { Fragment } from 'react';

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
        padding: 30,
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

    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();
        console.log(client);
        setOpen(false);
        setClient({});
    }

  return (
    <Fragment>
        <button className='btn btn-primary' onClick={handleOpen}>Reservar Turno</button>
            {open === false ? null : 
                <div
                    style={style.background}
                    onClick={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div style={style.modal}>
                        <form 
                            onSubmit={handleSubmit} 
                            className='container'
                        >
                            <h4 className="text-center">Turnos</h4>
                            <h5>Cancha 1</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <input 
                                    type="text"
                                    placeholder="Horario Entrada"
                                    id="entrada"
                                    name="entrada"
                                    value={client.entrada}
                                    className="form-control mb-2"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='col-6'>
                                    <input 
                                    type="text"
                                    placeholder="Horario Salida"
                                    id="salida"
                                    name="salida"
                                    value={client.salida}
                                    className="form-control mb-2"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Nombre"
                                        id="nombre"
                                        name="nombre"
                                        value={client.nombre}
                                        className="form-control mb-2"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='col-12'>
                                    <input 
                                        type="text"
                                        placeholder="Teléfono"
                                        id="telefono"
                                        name="telefono"
                                        value={client.telefono}
                                        className="form-control mb-2"
                                        onChange={handleChange}
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
