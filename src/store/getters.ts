import { StateType, GETTERS_ACTIONS } from '@/types'
import { twoSumArr } from '@/utils/shared'
import ConfigService from '@/data/configService'

const getters = {
  [GETTERS_ACTIONS.GET_TAB_RESOURCE]: (
    state: StateType
  ) => {
    const _tailwindConfig = state.tailwindConfig
    const selector = state.tabSelector

    return ConfigService.getTabResource(selector, _tailwindConfig)
  },
  [GETTERS_ACTIONS.USE_WIDTH_PREVIEW]: () => {
    const x = [2, 3, 4, 5, 6, 12]
    return x.reduce((a, max) => {
      const mapping = twoSumArr(max)
      return mapping && [...a, ...mapping]
    }, [] as string[][])
  },
  [GETTERS_ACTIONS.EXPORT_JSON]: (state: StateType) => {
    const _tailwindConfig = state.tailwindConfig
    return ConfigService.exportJson(_tailwindConfig)
  }
}

export default getters
