// First we need to import axios.js
import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.example.com'
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;