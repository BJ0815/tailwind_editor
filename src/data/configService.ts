import {
  ExportJsonType,
  GROUP,
  SettingParametersType,
  TabResourceType,
  ResourceType,
  CallBackForNestedObjectIterator
} from '@/types'
import {
  formatTabResource,
  checkHyphen,
  isNull,
  isEmpty,
  regexHyphen
} from '@/utils/shared'

const tabMapping = new Map([
  [GROUP.GENERAL.toLowerCase(), ['screens', 'opacity']],
  [GROUP.COLORS.toLowerCase(), ['colors']],
  [
    GROUP.TYPOGRAPHY.toLowerCase(),
    ['fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']
  ],
  [GROUP.WIDTH.toLowerCase(), ['width']],
  [GROUP.SPACING.toLowerCase(), ['spacing']]
])

export default class ConfigService {
  public static tabMapping = tabMapping;

  static exportJson (config: ResourceType): string {
    const JSONStructure: ExportJsonType = {
      theme: {}
    }
    JSONStructure.theme = config

    const JSONData =
      'text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(JSONStructure))
    return JSONData
  }

  static getTabResource (
    selector: string,
    config: ResourceType
  ): Array<TabResourceType> {
    const policy = ConfigService.tabMapping.get(selector)
    if (!policy) return []
    return policy.map(key => ({
      [key]: formatTabResource({ src: config[key], key })
    }))
  }

  static updateConfig (
    src: SettingParametersType,
    config: ResourceType,
    cb: CallBackForNestedObjectIterator
  ): void {
    const { group, oldItem, newItem } = src
    const subKeys = checkHyphen(newItem.key, regexHyphen)
    if (isNull(config[group]) || isEmpty(subKeys)) {
      throw new Error('input value update error')
    }

    if (oldItem.key && oldItem.key !== newItem.key) {
      delete config[group][oldItem.key]
    }

    ConfigService.setValueByNested(
      config[group],
      subKeys,
      newItem.value,
      cb
    )
  }

  private static setValueByNested (
    src: Record<string, string>,
    keys: string[],
    value: string,
    cb: Function
  ): void {
    if (isEmpty(keys)) return

    const key = keys.shift() as string
    if (typeof src[key] === 'string') {
      const newKey = [key, ...keys].join('-')
      return cb(src, newKey, value)
    }

    if (!isEmpty(keys) && !isNull(src[key])) {
      return ConfigService.setValueByNested(
        (src[key] as unknown) as Record<string, string>,
        keys,
        value,
        cb
      )
    }

    cb(src, key, value)
  }
}
