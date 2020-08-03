import defaultConfig from './default'
import { GROUP, ResourceType } from '../types'

interface Navigation<T> {
  text: T;
  emit: T;
}

type NavigationFn<T> = (v1: T) => Navigation<T>

const genNavigation: NavigationFn<string> = value => ({
  text: value,
  emit: value
})

export const navigators: Navigation<string>[] = Object.keys(GROUP).map(key => genNavigation(key))

export const tailwindConfig = defaultConfig as unknown as ResourceType
