// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-ls';
import Vuex from 'vuex';

import './main.scss';

import App from './App';
import router from './router';
import store from './stores';

import TransportationAPIPlugin from '@/plugins/TransportationAPIPlugin';
import NotificationPlugin from '@/plugins/NotificationPlugin';
import LoadingIndicator from "./components/base/loadingindicator.vue";


Vue.component('loading-indicator', LoadingIndicator);
Vue.use(VueResource);
Vue.use(VueLocalStorage, {
  namespace: 'stationschedule__'
});
Vue.use(Vuex);


Vue.use(TransportationAPIPlugin);
Vue.use(NotificationPlugin);

Vue.config.productionTip = false;

Vue.config.showTimeDiffTextRowCount = 3;
Vue.config.notifyUserDiff = Vue.ls.get('notifyUserDiff') || 6;
Vue.config.maxTableRows = Vue.ls.get('maxTableRows') || 10;
Vue.config.updateInterval = 60000;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
});
