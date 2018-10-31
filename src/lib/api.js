import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.APIURL,
});

export default api;
