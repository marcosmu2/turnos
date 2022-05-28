import {
    ADD_CLIENT,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_ERROR,
    GET_CLIENTS,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_ERROR,
    GET_CLIENT_DELETED,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_ERROR,
    GET_CLIENT_UPDATE,
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_ERROR
} from '../types';

const initialState = {
    clients: [],
    loading: false,
    error: null,
    clientDelete: null,
    clientUpdate: null
}

export default function clientReducer(state = initialState, action){
    switch(action.type){

        case ADD_CLIENT:
        case GET_CLIENTS:
            return{
                ...state,
                loading: action.payload
            }
        case ADD_CLIENT_SUCCESS:
            return{
                ...state,
                loading: false,
                clients: [...state.clients, action.payload]
            }
        case ADD_CLIENT_ERROR:
        case GET_CLIENTS_ERROR:
        case DELETE_CLIENT_ERROR:
        case UPDATE_CLIENT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_CLIENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                clients: action.payload
            }    
        case GET_CLIENT_DELETED:
            return{
                ...state,
                clientDelete: action.payload
            }
        case DELETE_CLIENT_SUCCESS:
            return{
                ...state,
                clients: state.clients.filter( client => client._id !== state.clientDelete),
                clientDelete: null
            }
        case GET_CLIENT_UPDATE:
            return{
                ...state,
                clientUpdate: action.payload
            }
            case UPDATE_CLIENT_SUCCESS:
                return{
                    ...state,
                    clients: state.clients.map(editClient =>
                        editClient._id === action.payload._id ? editClient = action.payload : editClient
                    )
                }
        default:
            return state;
    }
}