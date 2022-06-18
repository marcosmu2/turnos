import {
    ADD_SHIFT,
    ADD_SHIFT_SUCCESS,
    ADD_SHIFT_ERROR,
    GET_SHIFTS_BY_DATE,
    GET_SHIFTS_BY_DATE_SUCCESS,
    GET_SHIFTS_BY_DATE_ERROR
} from '../types';

const initialState = {
    shifts: [],
    entities: 2,
    entitiesName: 'Cancha',
    start: 8,
    end: 23,
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
        default:
            return state;
    }
}