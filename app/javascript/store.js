import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: 'Hello from Vue!',
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload;
    },
  },
});
