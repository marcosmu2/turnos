import axios from "axios";


const clienteAxiosShifts = axios.create({
    baseURL: 'http://localhost:4001/api/shift/'
});


export default clienteAxiosShifts;