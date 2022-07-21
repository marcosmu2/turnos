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

const initialState = {
    shifts: [],
    entities: 2,
    entitiesName: 'Cancha',
    start: 8,
    end: 23,
    date: "2022-07-21",
    loading: false,
    error: null,
    shiftDelete: null,
    shiftUpdate: null
}

export default function shiftReducer(state = initialState, action){
    switch(action.type){
        case ADD_SHIFT:
        case GET_SHIFTS_BY_DATE:
            return{
                ...state,
            }
        case ADD_SHIFT_SUCCESS:
            return{
                ...state,
                loading: false,
                shifts: [...state.shifts, action.payload]
            }
        case ADD_SHIFT_ERROR:
        case GET_SHIFTS_BY_DATE_ERROR:
        case DELETE_SHIFT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_SHIFTS_BY_DATE_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                shifts: action.payload
            } 
        case GET_SHIFT_DELETED:
            return{
                ...state,
                shiftUpdate: action.payload
            }
        case DELETE_SHIFT_SUCCESS:
            return{
                ...state,
                shifts: state.shifts.filter( shift => shift._id !== state.shiftDelete),
                shiftDelete: null
            }
        default:
            return state;
    }
}