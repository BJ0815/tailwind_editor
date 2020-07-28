
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
