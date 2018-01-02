import Vue from 'vue';
import Vuex from 'vuex';

import stations from './modules/stations';
import connection from './modules/connection';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stations,
    connection,
  }
});
