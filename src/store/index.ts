import { createStore } from 'vuex'
import { tailwindConfig } from '@/data'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { GROUP } from '@/types'

export type State = {
  tailwindConfig: Record<string, Record<string, string>>;
  tabSelector: string;
  isPopOpen: boolean;
  popupSrc: Record<string, string>;
};

const state: State = {
  tailwindConfig,
  tabSelector: GROUP.GENERAL.toLowerCase(),
  isPopOpen: false,
  popupSrc: {}
}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})
