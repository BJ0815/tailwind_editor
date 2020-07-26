import { FormatType, FormatParametersType, StateType, GETTERS_ACTIONS, GROUP } from '../types'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [
    GROUP.TYPOGRAPHY.toLowerCase(),
    ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']
  ],
  [GROUP.HEIGHT.toLowerCase(), ['height']],
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

function genArray (num: number) { return Array(num).fill(0).map((v, index) => ++index) }

function twoSum (numArray: number[], targetSum: number) {
  const pairs = []
  const waitForPair = []
  const format = (num: number, max: number) => `${num}/${max}`

  for (const currNum of numArray) {
    const counterPart = targetSum - currNum
    waitForPair.push(currNum)
    const counterPartIndex = waitForPair.indexOf(counterPart)
    if (counterPartIndex !== -1) {
      waitForPair.splice(counterPartIndex, 1)
      pairs.push([format(currNum, targetSum), format(counterPart, targetSum)])
    } else {
      waitForPair.push(currNum)
    }
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
  useWidthPreview: () => {
    const x = [2, 3, 4, 5, 6, 12]
    return x.reduce((a, max) => {
      const mapping = twoSum(genArray(max), max)
      a.push(mapping)
      return a
    }, [] as string[][][])
  }
}

export default getters
