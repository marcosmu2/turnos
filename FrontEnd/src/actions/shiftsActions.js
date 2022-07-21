import {
    ADD_SHIFT,
    ADD_SHIFT_SUCCESS,
    ADD_SHIFT_ERROR,
    GET_SHIFTS_BY_DATE,
    GET_SHIFTS_BY_DATE_SUCCESS,
    GET_SHIFTS_BY_DATE_ERROR,
    GET_SHIFT_DELETED,
    DELETE_SHIFT_SUCCESS,
    DELETE_SHIFT_ERROR,
    GET_SHIFT_UPDATE,
    START_UPDATE_SHIFT,
    UPDATE_SHIFT_SUCCESS,
    UPDATE_SHIFT_ERROR
} from '../types';
import AxiosShifts from '../config/axiosShifts';

//Crear turno
export function addNewShiftAction(shift){
    return async (dispatch) =>{

        dispatch(addShift());
        try {
            await AxiosShifts.post('/new', shift);
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
            const response = await AxiosShifts.get(`?date=${date}`);
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

//DELETE SHIFTS

export function deleteShiftsAction(id){
    return async (dispatch) =>{
        dispatch (getShiftDeleted(id));
        try {
            await AxiosShifts.delete(`/delete?id=${id}`)
            dispatch(deleteShiftSuccess())
        } catch (error) {
            console.log(error);
            dispatch(deleteShiftError())
        }
    }
}

const getShiftDeleted = id => ({
    type: GET_SHIFT_DELETED,
    payload: id
})
const deleteShiftSuccess = () => ({
    type: DELETE_SHIFT_SUCCESS,
    // payload: 
})
const deleteShiftError = () => ({
    type: DELETE_SHIFT_ERROR,
    payload: true
})