import {React, Fragment, useEffect} from 'react';
import Shifts from './Shifts';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getClientsAction } from '../../actions/clientsActions';

export default function TableShifts(props) {

  const dispatch = useDispatch();
  const entities = useSelector(state => state.shifts.entities);
  const entitiesName = useSelector(state => state.shifts.entitiesName);
  const shifts = useSelector(state => state.shifts.shifts);

  
  var rows = [];
  for (let i = 1; i < entities+1; i++) {
      rows.push(
        <th scope="col">{entitiesName} {i}</th>
      );
  }

  useEffect(() => {
    const loadClients = () => dispatch(getClientsAction());
    loadClients();
    //eslint-disable-next-line
  }, [])

  return (
    <Fragment>
    <h2 className='text-center'>Listado de Turnos</h2>
    <table className='table table-striped'>
      <thead className=''>
        <tr>
          <th scope="col">Horario de Entrada</th>
          {rows}
        </tr>
      </thead>
      <tbody>
        {props.arrayTime.length === 0 ? 
          <tr>
            <td>No hay turnos</td>
            <td></td>
            <td></td>
          </tr> : 
          (props.arrayTime.map(hour => (

            <tr>
              <td>{hour}</td>
              <Shifts
                hour = {hour}
                shifts = {shifts}
              />
            </tr>
            
          ))
        )}
        
      </tbody>
    </table>
  </Fragment>
  );
}
