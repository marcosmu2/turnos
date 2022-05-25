import React, {Fragment} from 'react'
import ModalClients from './components/Clients/ModalClients'
import TableClients from './components/Clients/TableClients'

export const ClientsView = () => {
  return (
    <Fragment>
        <h2 className='text-center'>Clientes</h2>
        
        <ModalClients></ModalClients>
        
        <TableClients></TableClients>
    </Fragment>
  )
}
