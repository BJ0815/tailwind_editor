export * from './constants'

export interface ResourceType {
  [x: string]: Record<string, string>;
}

export interface FormatType {
  label: string;
  id: string;
  value: string;
  type: string;
}

export interface StateType {
  tailwindConfig: Record<string, Record<string, string>>;
  tabSelector: string;
  isPopOpen: boolean;
  popupSrc: Record<string, string>;
}

export interface FormatParametersType {
  src: Record<string, string>;
  key: string;
  map?: Map<string, string>;
  prefix?: string;
}
