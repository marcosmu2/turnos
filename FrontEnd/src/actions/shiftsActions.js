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
    UPDATE_SHIFT_ERROR,
    UPDATE_DATE_SUCCESS,
    GET_ARRAY_TIME
} from '../types';
import AxiosShifts from '../config/axiosShifts';

//Crear turno
export function addNewShiftAction(shift, date){
    return async (dispatch) =>{

        dispatch(addShift());
        try {
            await AxiosShifts.post('/new', shift);
            console.log(shift) 
            dispatch(addShiftSuccess(shift));
            dispatch(getShiftsAction(date))
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

//EDITAR TURNOS

export function updateShiftAction(shift){
    return async (dispatch) =>{
        dispatch( updateShift() )

        try {
            await AxiosShifts.put(`/update?id=${shift._id}`, shift);

            dispatch( updateShiftSuccess(shift) );

        } catch (error) {
            console.log(error);
            dispatch(updateShiftError())
        }
    }
}

const updateShift = () => ({
    type: START_UPDATE_SHIFT
})

const updateShiftSuccess = (shift) => ({
    type: UPDATE_SHIFT_SUCCESS,
    payload: shift
})

const updateShiftError = () => ({
    type: UPDATE_SHIFT_ERROR,
    payload: true
})



//UPDATE DATE

export function updateDateAction(date){
    return (dispatch) =>{
        dispatch(updateDate(date));
    }
}

const updateDate = date => ({
    type: UPDATE_DATE_SUCCESS,
    payload: date
})

//UPDATE ARRAYTIME

export function getArrayTimeAction(start, end){
    return(dispatch)=>{
        dispatch(getArrayTime(schedule(start, end)));
        // try {
        //     getArrayTimeSuccess()
        // } catch (error) {
            
        // }
    }
}

const getArrayTime = (arrayTime) => ({
    type: GET_ARRAY_TIME,
    payload: arrayTime
})



function schedule(start, end){

    let arrayTime = [];

    var time = new Date();  
    time.setHours(start,0,0,0);
  
    arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
    
    var hours = time.getHours();
  
    while(hours < end){
      hours = hours + 1.5;
      time.setMinutes(time.getMinutes()+90);
  
      arrayTime.push((time.getHours()<10?('0'+time.getHours()):time.getHours()) + ":" + (time.getMinutes()<10?('0'+time.getMinutes()):time.getMinutes()));
    }
    
    return arrayTime;
}