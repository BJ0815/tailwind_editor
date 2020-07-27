import Vue from 'vue'
import Vuex from 'vuex'
import { tailwindConfig } from '../data'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tailwindConfig,
    tabSelector: 'general',
    isPopOpen: false,
    popupSrc: {}
  },
  getters,
  mutations,
  actions,
  modules: {}
})
