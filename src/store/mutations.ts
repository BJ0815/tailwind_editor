import Vue from 'vue'
import {
  StateType,
  MUTATIONS_ACTIONS,
  SettingParametersType,
  FormatType
} from '@/types'
import ConfigService from '@/data/configService'

export default {
  [MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR] (state: StateType, input: string) {
    state.tabSelector = input.toLowerCase()
  },
  [MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG] (
    state: StateType,
    payload: SettingParametersType
  ) {
    const _tailwindConfig = state.tailwindConfig
    ConfigService.updateConfig(
      payload,
      _tailwindConfig,
      (src, key, value) =>
        Vue.set(src, key, value)
    )
  },
  [MUTATIONS_ACTIONS.TOGGLE_POPUP] (
    state: StateType,
    src: [string, FormatType]
  ) {
    const [group, item] = src
    const field = {
      ...item,
      ...{
        group
      }
    }
    state.isPopOpen = !state.isPopOpen
    state.popupSrc = field
  },
  [MUTATIONS_ACTIONS.CLOSE_POPUP] (state: StateType) {
    state.isPopOpen = false
  }
}
