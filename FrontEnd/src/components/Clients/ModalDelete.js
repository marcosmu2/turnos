import React, { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';

//redux
import { useDispatch } from 'react-redux';
import { deleteClientsAction } from '../../actions/clientsActions';


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

export default function ModalDelete(props) {

    //State modal
    const [open, setOpen] = useState(props.state);
    const handleClose = () => {
        setOpen(false);
        props.handleModal(false);
    }

    const dispatch = useDispatch()
    
    //SUBMIT
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(deleteClientsAction(props.id));
        setOpen(false);
    }


  return createPortal(
    <Fragment>
            {open === false ? null : 
                <div
                    style={style.background}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div style={style.modal}
                    >
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
                            <h4 className="text-center mb-3 mt-4">Eliminar Cliente</h4>
                            
                            <div className='row'>
                                <p className='text-center my-4'>¿Está seguro que desea eliminar el Cliente?</p>
                            </div>
                            
                            <div className='d-flex justify-content-end'>
                                <button className="btn btn-primary" type="submit">Si</button>
                                <button className="btn btn-danger ms-2" onClick={handleClose}>No</button>
                            </div>
                            
                        </form>
                    </div>  
                </div>
            }
    </Fragment>,
    document.getElementById('portal')
  );
}