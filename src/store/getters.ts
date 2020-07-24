import { FormatType, StateType, GETTERS_ACTIONS, GROUP } from '../types'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [GROUP.TYPOGRAPHY.toLowerCase(), ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']]
])

const format = (src: Record<string, string>, map?: Map<string, string>, prefix?: string) =>
  Object.keys(src).reduce((accumulator, currentValue) => {
    let res: FormatType[] = []
    const newKey = map ? map.get(currentValue) || currentValue : currentValue
    const value = src[currentValue]

    if (typeof value === 'object') res = [...res, ...format(value, map, currentValue)]
    else {
      res.push({
        label: prefix ? prefix + '-' + newKey : newKey,
        id: prefix ? prefix + '-' + currentValue : currentValue,
        value
      })
    }
    return [...accumulator, ...res]
  }, [] as FormatType[])

const getters = {
  [GETTERS_ACTIONS.USE_SCREENS_MAP]: (state: StateType) => {
    const screens = (state.tailwindConfig.screens as unknown) as Record<
      string,
      string
    >

    const map = new Map([
      ['sm', 'Small'],
      ['md', 'Medium'],
      ['lg', 'Large'],
      ['xl', 'Extra Large']
    ])

    return format(screens, map)
  },
  [GETTERS_ACTIONS.GET_TAB_RESOURCE]: (state: StateType, getters: { [x: string]: unknown }) => {
    const selector = state.tabSelector
    const policy = tabMapping.get(selector) || []
    if (!policy.length) return []

    return policy.map(key => ({
      [key]:
        getters[`use${key.toUpperCase()}MAP`] ||
        format(state.tailwindConfig[key])
    }))
  }
}

export default getters
