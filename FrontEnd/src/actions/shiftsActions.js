import {
    ADD_SHIFT,
    ADD_SHIFT_SUCCESS,
    ADD_SHIFT_ERROR,
    GET_SHIFTS_BY_DATE,
    GET_SHIFTS_BY_DATE_SUCCESS,
    GET_SHIFTS_BY_DATE_ERROR
} from '../types';
import clienteAxiosShifts from '../config/axiosShifts';

//Crear turno
export function addNewShiftAction(shift){
    return async (dispatch) =>{

        dispatch(addShift());
        try {
            await clienteAxiosShifts.post('/new', shift);
            console.log(shift) 
            dispatch(addShiftSuccess(shift));
        } catch (error) {
            console.log(error);

            dispatch(addShiftError(true));
        }
    }
}

const addShift = () => ({
    type: ADD_SHIFT,
    payload: true
})
const addShiftSuccess = (shift) => ({
    type: ADD_SHIFT_SUCCESS,
    payload: shift
})
const addShiftError = (stateError) => ({
    type: ADD_SHIFT_ERROR,
    payload: stateError
})

//GET SHIFT

export function getShiftsAction(date){
    return async (dispatch) =>{
        dispatch(getShifts());

        try {
            const response = await clienteAxiosShifts.get(`?date=${date}`);
            dispatch(getShiftsSuccess(response.data));
        } catch (error) {
            console.log(error);
            
            dispatch(getShiftsError());
        }
    }
}

const getShifts = () => ({
    type: GET_SHIFTS_BY_DATE,
    payload: true
})
const getShiftsSuccess = (shifts) => ({
    type: GET_SHIFTS_BY_DATE_SUCCESS,
    payload: shifts
})
const getShiftsError = () => ({
    type: GET_SHIFTS_BY_DATE_ERROR,
    payload: true
})