import axios from 'axios';

const api = axios.create({
    baseURL: 'https://happy-deploy-matheus.herokuapp.com/',
})

export default api;