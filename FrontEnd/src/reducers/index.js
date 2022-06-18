import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';
import shiftReducer from './shiftsReducer';

export default combineReducers({
    clients: clientsReducer,
    shifts: shiftReducer
});