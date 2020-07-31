import { StateType, MUTATIONS_ACTIONS, SettingParametersType } from '../types'
import { isNull, isEmpty, regexHyphen, checkHyphen } from '../utils/shared'
import Vue from 'vue'
const setValueByNested = (src: Record<string, string>, keys: string[], value: string): void => {
  if (isEmpty(keys)) return

  const key = keys.shift() as string
  if (!isEmpty(keys) && !isNull(src[key])) {
    return setValueByNested(src[key] as unknown as Record<string, string>, keys, value)
  }

  // src[key] = value
  Vue.set(src, key, value)
}

export default {
  [MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR] (state: StateType, input: string) {
    state.tabSelector = input.toLowerCase()
  },
  [MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG] (state: StateType, payload: SettingParametersType) {
    const { group, oldItem, newItem } = payload
    const _tailwindConfig = state.tailwindConfig
    const subKeys = checkHyphen(newItem.key, regexHyphen)
    if (isNull(_tailwindConfig[group]) || isEmpty(subKeys)) {
      throw new Error('input value update error')
    }

    if (oldItem.key && oldItem.key !== newItem.key) {
      delete _tailwindConfig[group][oldItem.key]
    }
    setValueByNested(_tailwindConfig[group], subKeys, newItem.value)
  },
  [MUTATIONS_ACTIONS.TOGGLE_POPUP] (state: StateType, src: [string, Record<string, string>]) {
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
