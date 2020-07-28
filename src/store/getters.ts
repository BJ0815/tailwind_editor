import { FormatType, FormatParametersType, StateType, GETTERS_ACTIONS, GROUP, ExportJsonType } from '../types'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [
    GROUP.TYPOGRAPHY.toLowerCase(),
    ['fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']
  ],
  // [GROUP.HEIGHT.toLowerCase(), ['height']],
  [GROUP.WIDTH.toLowerCase(), ['width']],
  [GROUP.SPACING.toLowerCase(), ['spacing']]
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

function twoSumArr (targetSum: number) {
  const pairs = []
  const format = (num: number, max: number) => `${num}/${max}`

  let count = Math.floor(targetSum / 2)
  let compare = targetSum - 1
  while (count > 0) {
    const counterPart = targetSum - compare
    pairs.push([format(counterPart, targetSum), format(compare, targetSum)])
    count--
    compare--
  }
  return pairs
}
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
  },
  [GETTERS_ACTIONS.USE_WIDTH_PREVIEW]: () => {
    const x = [2, 3, 4, 5, 6, 12]
    return x.reduce((a, max) => {
      const mapping = twoSumArr(max)
      return mapping && [...a, ...mapping]
    }, [] as string[][])
  },
  [GETTERS_ACTIONS.EXPORT_JSON]: (state: StateType) => {
    const config = state.tailwindConfig
    const JSONStructure: ExportJsonType = {
      theme: {}
    }
    JSONStructure.theme = config

    const JSONData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(JSONStructure))
    return JSONData
  }
}

export default getters
