import axios from 'axios';

// http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001
const api = axios.create({
  baseURL: 'http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001/api/v1/',
});

export default api;
