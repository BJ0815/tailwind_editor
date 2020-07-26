import { FormatType, FormatParametersType, StateType, GETTERS_ACTIONS, GROUP } from '../types'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [
    GROUP.TYPOGRAPHY.toLowerCase(),
    ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']
  ],
  [GROUP.HEIGHT.toLowerCase(), ['height']],
  [GROUP.WIDTH.toLowerCase(), ['width']]
])

const format = ({ src, map, prefix, key }: FormatParametersType) =>
  Object.keys(src).reduce((accumulator, currentValue) => {
    let res: FormatType[] = []
    const newKey = map ? map.get(currentValue) || currentValue : currentValue
    const value = src[currentValue]

    if (typeof value === 'object') { res = [...res, ...format({ src: value, map, prefix: currentValue, key })] } else {
      res.push({
        label: prefix ? prefix + '-' + newKey : newKey,
        id: prefix ? prefix + '-' + currentValue : currentValue,
        value,
        type: key === 'colors' ? 'color' : 'text'
      })
    }
    return [...accumulator, ...res]
  }, [] as FormatType[])

const getters = {
  [GETTERS_ACTIONS.GET_TAB_RESOURCE]: (
    state: StateType
  ) => {
    const selector = state.tabSelector
    const policy = tabMapping.get(selector) || []
    if (!policy.length) return []

    return policy.map(key => ({
      [key]:
        format({ src: state.tailwindConfig[key], key })
    }))
  }
}

export default getters
