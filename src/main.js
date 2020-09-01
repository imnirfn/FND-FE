/* eslint-disable import/first */
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

Vue.use(hooks);
Vue.use(VueCompositionAPI);
import App from './App.vue';
import router from './router';
import store from './store';
import '../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
