import axios from 'axios';

const instance = axios.create({
    method: 'get',
    baseURL: "https://api.github.com",
    crossDomain: true,
})

export default instance;