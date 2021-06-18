import { ThemeState } from "./ThemeReducer"

/**
 * Paleta de colores para tema light
 */
export const ThemeLight: ThemeState = {
  dark: false,
  colors: {
    redRimac: ['#EF3340',],
    green: ['#43B748', '#7CC954',],
    grayTitle: ['#494F66',],
    placeholder: ['#A3ABCC', '#676F8F',],
    separator: ['#E4E8F7',],
    border: ['#F0F2FA', '#E4E8F7',],
    background: ['#F7F8FC',],
  }
}

/**
 * Paleta de colores para tema dark
 */
export const ThemeDark: ThemeState = {
  dark: true,
  colors: {
    redRimac: [],
    green: [],
    grayTitle: [],
    placeholder: [],
    separator: [],
    border: [],
    background: [],
  }
}