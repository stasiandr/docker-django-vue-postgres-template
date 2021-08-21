import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import modal from './modal'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    modal,
  },
  plugins: [createPersistedState()],
})
