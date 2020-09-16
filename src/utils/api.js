import axios from 'axios';
import store from '../store';
import { getToken } from '../utils/auth';

// http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001
const api = axios.create({
  baseURL: 'http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001/api/v1/',
});

api.interceptors.request.use(
  // eslint-disable-next-line arrow-parens
  config => {
    if (store.getters.token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${getToken()}`;
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
