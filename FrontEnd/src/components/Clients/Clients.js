import React, { Fragment, useState } from 'react'
import ModalDelete from '../Clients/ModalDelete'
import ModalUpdateClient from '../Clients/ModalUpdateClient'

//redux
import {useDispatch} from 'react-redux';
import {getClientUpdateAction} from '../../actions/clientsActions'

function Clients({client}) {

    const {_id, name, phone, phone2, address} = client

    const [openModalUpdateClient, setModalUpdateClient] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);  

    const dispatch = useDispatch()
    const fillModal = client => {
        dispatch(getClientUpdateAction(client));
    }
    
    return (  
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{phone2}</td>
                <td>{address}</td>
                <td>
                    <button 
                        className='btn btn-primary' 
                        onClick={() => {setModalUpdateClient(true); fillModal(client)}}>Editar
                    </button>
                    <button 
                        type="button"
                        className='btn btn-danger ms-1'
                        onClick={() => setOpenDeleteModal(true)}>Borrar
                    </button>
                </td>
            </tr>
            {openModalUpdateClient === true ? 
                <ModalUpdateClient 
                    state={openModalUpdateClient} 
                    handleModal={setModalUpdateClient}
                >  
                </ModalUpdateClient> : null}
            {openDeleteModal === true ? <ModalDelete state={openDeleteModal} handleModal={setOpenDeleteModal} id={_id}></ModalDelete> : null}
        </Fragment>
    );
}

export default Clients;
