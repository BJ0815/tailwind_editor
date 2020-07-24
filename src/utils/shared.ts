
export const isNull = (src: unknown) => !src
export const isEmpty = (src: unknown[]) => !src.length

export const regexHyphen = /\w+(-)\w+/g

export const checkHyphen = (src: string, regex: RegExp) => {
  return (new RegExp(regex).test(src) && src.split(/[-]/)) || [src]
}
