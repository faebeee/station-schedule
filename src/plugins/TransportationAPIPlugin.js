'use strict';

import Vue from 'vue';
import {fetchUrl} from 'fetch';

export default class TransportationAPIPlugin {

  /**
   * Get stationboard
   * @param {Number} id
   */
  getStationboard(id) {
    return Vue.http.get(`https://transport.opendata.ch/v1/stationboard?id=${id}`)
  }

  /**
   *
   * @param query
   */
  search(query) {
    return Vue.http.get(`https://transport.opendata.ch/v1/locations?query=${query}`);
  }

  /**
   * Install plugin
   * @param {Vue} _Vue
   */
  static install(_Vue) {
    _Vue.prototype.$transportation = new TransportationAPIPlugin();
  }
}
