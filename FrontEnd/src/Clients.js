import React, {Fragment} from 'react'
import ModalClients from './components/ModalClients'
import TableClients from './components/TableClients'

export const Clients = () => {
  return (
    <Fragment>
        <h2 className='text-center'>Clientes</h2>
        
        <ModalClients></ModalClients>
        
        <TableClients></TableClients>
    </Fragment>
  )
}
