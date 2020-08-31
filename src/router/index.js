import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSvgGauge from 'vue-svg-gauge';
import Home from '../views/Home.vue';
import Scan from '../views/scan/index.vue';
// import Gauge from '../views/Gauge.vue';

Vue.use(VueRouter, VueSvgGauge);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
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
