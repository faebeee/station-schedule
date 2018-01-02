'use strict';

import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    connection: null,
    showModal: false,
  },
  mutations: {
    set(state, details){
      state.connection = details;
    },

    showModal(state, show){
      state.showModal = show;
    }

  },
  actions: {
    openModal( store ) {
      store.commit('showModal', true);
    },

    closeModal( store ) {
      store.commit('showModal', false);
      store.commit('set', null);
    }
  }
}
