import React, { Fragment, useEffect } from 'react';


//redux
import { useSelector, useDispatch } from 'react-redux';
import { getClientsAction } from '../../actions/clientsActions';
import Clients from '../Clients/Clients'



export default function MyTable() {

  const dispatch = useDispatch();

  useEffect(() => {
    const loadClients = () => dispatch(getClientsAction());
    loadClients();
    //eslint-disable-next-line
  }, [])
  
  const clients = useSelector( state => state.clients.clients)

  return (
    <Fragment>
      <h2 className='text-center'>Listado de Clientes</h2>
      <table className='table table-striped'>
        <thead className=''>
          <tr>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Teléfono Alternativo</th>
            <th scope="col">Dirección</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? 
            <tr>
              <td>No hay turnos</td>
              <td></td>
              <td></td>
            </tr> : 
            (clients.map(client => (
              <Clients
                key= {client._id}
                client={client}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

