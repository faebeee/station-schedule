'use strict';

import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    stations: [],
  },
  mutations: {
    add(state, id) {
      state.stations.push(id);

      Vue.ls.set('stations', state.stations);
    },

    remove(state, id) {
      const pos = state.stations.indexOf(id);
      state.stations.splice(pos, 1);
      Vue.ls.set('stations', state.stations);
    },

    load(state) {
      state.stations = Vue.ls.get('stations') || [];
    }
  },
  actions: {}
}
