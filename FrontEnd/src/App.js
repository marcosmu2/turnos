import React, { Fragment, useState } from 'react';
import {ClientsView} from './ClientsView';
import ShiftsView from './ShiftsView';

//Redux
import { Provider } from 'react-redux';
import store from './store';
function App() {

  const [View, setView] = useState(1);
  const handleOpenShifts = () => setView(1);
  const handleOpenClients = () => setView(2);


  return (
    <Fragment>
      <Provider store={store}>
        <button className='btn btn-primary' onClick={handleOpenShifts}>Turnos</button>
        <button className='btn btn-primary' onClick={handleOpenClients}>Clientes</button>

        {View === 1 ? <ShiftsView></ShiftsView> : <ClientsView></ClientsView>}
      </Provider>
    </Fragment>
  );
}

export default App;
