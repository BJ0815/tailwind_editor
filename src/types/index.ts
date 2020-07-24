export * from './constants'

export interface ResourceType {
  [x: string]: Record<string, string>;
}

export interface FormatType {
  label: string;
  id: string;
  value: string;
}

export interface StateType {
  tailwindConfig: Record<string, Record<string, string>>;
  tabSelector: string;
}
