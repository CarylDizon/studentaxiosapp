import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://YOUR_DJANGO_SERVER_IP:8000/api', // e.g. http://192.168.1.10:8000/api
  timeout: 5000,
});

export default instance;
