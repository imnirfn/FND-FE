import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSvgGauge from 'vue-svg-gauge';
import Home from '../views/Home.vue';
import Scan from '../views/scan/index.vue';
// import Gauge from '../views/Gauge.vue';

Vue.use(VueRouter, VueSvgGauge);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Journarlist.vue'),
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Enterprise.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
