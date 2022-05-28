import React, { Fragment, useState } from 'react';
import {ClientsView} from './ClientsView';
import ShiftsView from './ShiftsView';
import MenuHamburguesa from './components/MenuHamburguesa';

//Redux
import { Provider } from 'react-redux';
import store from './store';
function App() {

  const [View, setView] = useState(1);
  const handleOpenShifts = () => setView(1);
  const handleOpenClients = () => setView(2);

  const[menu, mostrarMenu] = useState(false); 

  return (
    <Fragment>
      <Provider store={store}>
      <div className="col-12">
            <nav className="py-2 row justify-content-between bgAzul">
                <div className="col-4">
                    <h1>Turnero</h1>
                </div>
                <div className="d-lg-none col-6 my-auto text-center">
                    <MenuHamburguesa 
                    menu={menu}
                    mostrarMenu={mostrarMenu} />
                </div>
                <div className="col-6 my-auto d-none d-lg-block">
                    <div className="d-flex justify-content-around">
                      <button className='btn btn-primary' onClick={handleOpenShifts}>Turnos</button>
                      <button className='btn btn-primary' onClick={handleOpenClients}>Clientes</button>
                                        
                    </div>
                </div>
            </nav>
            {menu ? 
            <div className="text-center">
                <div className="row">
                    <div className="col-12 bgAzul menuDesplegable">
                      <button className='btn btn-primary' onClick={handleOpenShifts}>Turnos</button>
                      <button className='btn btn-primary' onClick={handleOpenClients}>Clientes</button>
                    </div>
                </div>
            </div>
            : null}
        </div>     
        {/* <button className='btn btn-primary' onClick={handleOpenShifts}>Turnos</button>
        <button className='btn btn-primary' onClick={handleOpenClients}>Clientes</button> */}

        {View === 1 ? <ShiftsView></ShiftsView> : <ClientsView></ClientsView>}
      </Provider>
    </Fragment>
  );
}

export default App;
