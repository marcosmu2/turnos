import React, { Fragment, useState } from 'react';
import { Clients } from './Clients';
import Shifts from './Shifts';
function App() {

  const [View, setView] = useState(1);
  const handleOpenShifts = () => setView(1);
  const handleOpenClients = () => setView(2);


  return (
    <Fragment>
      <button className='btn btn-primary' onClick={handleOpenShifts}>Turnos</button>
      <button className='btn btn-primary' onClick={handleOpenClients}>Clientes</button>

      {View === 1 ? <Shifts></Shifts> : <Clients></Clients>}
    </Fragment>
  );
}

export default App;
