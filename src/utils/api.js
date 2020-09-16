/* eslint-disable import/no-cycle */
import axios from 'axios';
import store from '../store';
import { getToken } from './auth';

// http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001
const api = axios.create({
  baseURL: 'http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001/api/v1/',
});

api.interceptors.request.use(
  // eslint-disable-next-line arrow-parens
  config => {
    if (store.getters.token) {
      // eslint-disable-next-line no-alert
      alert('token');
      console.log('token', store.getters.token);
      console.log(getToken());
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${getToken()}`;
    } else {
      // eslint-disable-next-line no-alert
      alert('no token');
      console.log('no token');
    }
    return config;
  },
  // eslint-disable-next-line arrow-parens
  error => {
    console.log(error);
    Promise.reject(error);
  },
);
export default api;
