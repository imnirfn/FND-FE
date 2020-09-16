/* eslint-disable import/no-cycle */
import api from '../utils/api';

export function login(data) {
  return api({
    method: 'post',
    url: '/auth/login',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });
}

export function register(data) {
  return api({
    method: 'post',
    url: '/auth/register',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify({
      email: data.email,
      password: data.password,
      roles: data.roles,
    }),
  });
}
