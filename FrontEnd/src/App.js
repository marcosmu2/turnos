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
                  <h1 className='ms-4'>Turnero</h1>
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
        
        <h1>Falta por hacer</h1>
        <ol>
          {/* <li>Armar reducer para cambiar la fecha</li> */}
          <li>Probar el metodo del array que hablamos con marcos en el bar, tener un array grande aunque sea harcodeado que traiga en cada elemento horario, idcancha y turno. Uno por cada horario y turno que tenga el dia. PAra hacer un solo map en el render de los botones</li>
          <li>Pasar por store el array de horas</li>
          <li>Recargar la tabla cuando cambie el store de turnos, para que se vea el cambio reflejado (editar, eliminar)</li>
          <li>Probar que la edicion funcione bien</li>
          <li>Cuando se pruebe el editar, revisar si el back devuelve un error y mostrarlo en el modal</li>
          <li>cambiar la tabla a fracciones</li>
        </ol>
        
        <h1>Errores</h1>
        <ol>
          <li>El back devuelve un error cuando el turno quiere pasar de turno comun a turno fijo</li>
          <li>Borro el turno de la cancha 2, cuando quiero borrar el turno de la cancha uno en el mismo dia y horario no me deja. ME deja tocar en gregar turno en las otras filas</li>
          <li>Creo turno cancha dos, recargo pagina, creo turno cancha uno mismo dia y hora se crea un botón de "agregar" entre el primero y seundo turno, el valor de la cancha figura como 1 dentro de ese Agregar,se desplaza al segundo turno a una 3ra "columna"</li>
          <li>Despues de agregar un turno no se puede agregar el turno de la otra cancha, misma fecha y horario hasta que no se recarga la pagina</li>
          <li>Una vez creado el turno en la primera cancha, cuando quieren agregar turno en la segunda cancha, el id de cancha que trae el front es 1 tambien. Al tener este comportamiento, guarda los dos turnos con valor de cancha 1. Si borro el que figura primero, el que estaba en la segunda columna se mueve hacia la primera despues de recargar</li>
          <li></li>

        </ol>
        {View === 1 ? <ShiftsView/> : <ClientsView/>}
      </Provider>
    </Fragment>
  );
}

export default App;
