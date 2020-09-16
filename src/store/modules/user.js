/* eslint-disable import/no-cycle */
import { login } from '../../api/auth';
import { setToken } from '../../utils/auth';

const user = {
  state: {
    info: {},
    token: '',
  },

  mutations: {
    LOGIN: (state, token) => {
      state.token = token;
      setToken(token);
    },
  },

  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            const { token } = res.data.data;
            commit('LOGIN', token);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
};

export default user;
