import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ee784.firebaseio.com/'
});

export default instance;