import { FormatType, FormatParametersType } from '@/types'

export const isNull = (src: unknown) => !src
export const isEmpty = (src: unknown[]) => !src.length

export const regexHyphen = /\w+(-)\w+/g

export const checkHyphen = (src: string, regex: RegExp) => {
  return (new RegExp(regex).test(src) && src.split(/[-]/)) || [src]
}

export const validFormats = (src: string, formats: string[]) => {
  const regex = (target: string) => /([%|px|rem|em|vw|vh]+)$/gm.exec(target)

  const res = regex(src)
  if (!res) return false

  return formats.includes(res[0]) && [src.replace(res[0], ''), res[0]]
}

export const formatTabResource = ({ src, map, prefix, key }: FormatParametersType) =>
  Object.keys(src).reduce((accumulator, currentValue) => {
    let res: FormatType[] = []
    const newKey = map ? map.get(currentValue) || currentValue : currentValue
    const value = src[currentValue]

    if (typeof value === 'object') { res = [...res, ...formatTabResource({ src: value, map, prefix: currentValue, key })] } else {
      res.push({
        label: prefix ? prefix + '-' + newKey : newKey,
        id: prefix ? prefix + '-' + currentValue : currentValue,
        value,
        type: key === 'colors' ? 'color' : 'text'
      })
    }
    return [...accumulator, ...res]
  }, [] as FormatType[])

export function twoSumArr (targetSum: number) {
  const pairs = []
  const formatValue = (num: number, max: number) => `${num}/${max}`

  let count = Math.floor(targetSum / 2)
  let compare = targetSum - 1
  while (count > 0) {
    const counterPart = targetSum - compare
    pairs.push([formatValue(counterPart, targetSum), formatValue(compare, targetSum)])
    count--
    compare--
  }
  return pairs
}
