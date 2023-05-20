import axios from 'axios';

//const Base_URL = 'http://127.0.0.1:3002/api/';
const API_URL = 'http://localhost:8080/'

export const addUser = async (data) => {
    try {
        return await axios.post(`${API_URL}Student`, data);
    } catch(error){
        console.log('Error while calling AddUser api', error.message);
    }
}

export const getUsers = async() => {
    try {
        return await axios.get(`${API_URL}students`, );
    } catch (error){
        console.log("error while loading api",error.message )
    }
}