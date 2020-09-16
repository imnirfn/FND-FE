import { login } from '../../api/auth';

const user = {
  state: {
    info: {},
  },

  mutations: {
    LOGIN: (state, token) => {
      state.token = token;
    },
  },

  actions: {
    Login({ commit, userInfo }) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            const { token } = res.data;
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
