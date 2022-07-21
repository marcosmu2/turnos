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
    START_UPDATE_CLIENT,
    UPDATE_CLIENT_SUCCESS,
    UPDATE_CLIENT_ERROR
} from '../types';
import clienteAxios from '../config/axios';

//crear cliente
export function addNewClientAction(client){
    return async (dispatch) => {
        dispatch(addClient() );

        try {
            await clienteAxios.post('/new', client);      //se le pasa a la API

            dispatch(addClientSuccess(client));     //se le pasa al state
        } catch (error) {
            console.log(error);

            dispatch(addClientError(true));
        }
    }
}

const addClient = () => ({
    type: ADD_CLIENT,
    payload: true
})
const addClientSuccess = (client) => ({
    type: ADD_CLIENT_SUCCESS,
    payload: client
})
const addClientError = (stateError) => ({
    type: ADD_CLIENT_ERROR,
    payload: stateError
})

//GET CLIENTS

export function getClientsAction(){
    return async (dispatch) =>{
        dispatch(getClients());

        try {
            const response = await clienteAxios.get('/');
            dispatch(getClientsSuccess(response.data));
        } catch (error) {
            dispatch(getClientsError());
        }
    }
}

const getClients = () => ({
    type: GET_CLIENTS,
    payload: true
})
const getClientsSuccess = (clients) => ({
    type: GET_CLIENTS_SUCCESS,
    payload: clients
})
const getClientsError = () => ({
    type: GET_CLIENTS_ERROR,
    payload: true
})

//DELETE CLIENTS

export function deleteClientsAction(id){
    return async (dispatch) =>{
        dispatch (getClientDeleted(id));
        try {
            await clienteAxios.delete(`/delete?id=${id}`)
            dispatch(deleteClientSuccess())
        } catch (error) {
            console.log(error);
            dispatch(deleteClientError())
        }
    }
}

const getClientDeleted = id => ({
    type: GET_CLIENT_DELETED,
    payload: id
})
const deleteClientSuccess = () => ({
    type: DELETE_CLIENT_SUCCESS,
    // payload: 
})
const deleteClientError = () => ({
    type: DELETE_CLIENT_ERROR,
    payload: true
})


//COLOCAR PRODUCTO EN MODAL EDICION

export function getClientUpdateAction(client){
    return(dispatch =>{
        dispatch(getClientUpdate(client));
    })
}

const getClientUpdate = (client) => ({
    type: GET_CLIENT_UPDATE,
    payload: client
})

//EDITAR

export function updateClientAction(client){
    return async (dispatch) =>{
        dispatch( updateClient() )

        try {
            await clienteAxios.put(`/update?id=${client._id}`, client);

            dispatch( updateClientSuccess(client) );

        } catch (error) {
            console.log(error);
            dispatch(updateClientError())
        }
    }
}

const updateClient = () => ({
    type: START_UPDATE_CLIENT
})

const updateClientSuccess = (client) => ({
    type: UPDATE_CLIENT_SUCCESS,
    payload: client
})

const updateClientError = () => ({
    type: UPDATE_CLIENT_ERROR,
    payload: true
})