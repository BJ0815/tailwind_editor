import { StateType, MUTATIONS_ACTIONS } from '../types'
import { isNull, isEmpty, regexHyphen, checkHyphen } from '../utils/shared'
const setValueByNested = (src: Record<string, string>, keys: string[], value: string): void => {
  if (isEmpty(keys)) return

  const key = keys.shift() as string
  if (!isEmpty(keys) && !isNull(src[key])) {
    return setValueByNested(src[key] as unknown as Record<string, string>, keys, value)
  }

  src[key] = value
}

export default {
  [MUTATIONS_ACTIONS.TOGGLE_TAB_SELECTOR] (state: StateType, input: string) {
    state.tabSelector = input.toLowerCase()
  },
  [MUTATIONS_ACTIONS.SET_TAILWIND_CONFIG] (state: StateType, payload: string[]) {
    const [group, subKey, newValue] = payload

    const subKeys = checkHyphen(subKey, regexHyphen)
    if (isNull(state.tailwindConfig[group]) || isEmpty(subKeys)) {
      throw new Error('input value update error')
    }

    setValueByNested(state.tailwindConfig[group], subKeys, newValue)
  },
  togglePopup (state: StateType, src: [string, Record<string, string>]) {
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
  closePopup (state: StateType) {
    state.isPopOpen = false
  }
}
