import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    toggleNavBar(state, toggle) {
      state.drawer = toggle;
    }
  },
  actions: {
    toggleNavBar({ commit }, toggle) {
      commit('toggleNavBar', toggle);
    }
  },
  getters: {
    toggleNavBar(state) {
      return state.drawer;
    }
  }
});
