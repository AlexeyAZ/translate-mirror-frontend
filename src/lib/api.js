import axios from 'axios';
import config from '../config';
import Cookie from 'js-cookie';

const token = Cookie.get(config.AUTH_KEY);

const api = axios.create({
  baseURL: config.APIURL,
  headers: {
    Authorization: token
  }
});

export default api;
