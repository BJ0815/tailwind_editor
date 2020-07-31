import { StateType, GETTERS_ACTIONS, GROUP, ExportJsonType } from '@/types'
import { formatTabResource, twoSumArr } from '@/utils/shared'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [GROUP.TYPOGRAPHY.toLowerCase(), ['fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']],
  // [GROUP.HEIGHT.toLowerCase(), ['height']],
  [GROUP.WIDTH.toLowerCase(), ['width']],
  [GROUP.SPACING.toLowerCase(), ['spacing']]
])

const getters = {
  [GETTERS_ACTIONS.GET_TAB_RESOURCE]: (
    state: StateType
  ) => {
    const config = state.tailwindConfig
    const selector = state.tabSelector
    const policy = tabMapping.get(selector)
    if (!policy) return []
    return policy.map(key => ({
      [key]:
      formatTabResource({ src: config[key], key })
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
