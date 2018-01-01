// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-ls';
import Vuex from 'vuex'


Vue.use(VueResource);
Vue.use(VueLocalStorage, {
  namespace: 'stationschedule__'
});
Vue.use(Vuex);

import './main.scss';

import App from './App';
import router from './router';
import store from './stores';

import TransportationAPIPlugin from '@/plugins/TransportationAPIPlugin';

Vue.use(TransportationAPIPlugin);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
