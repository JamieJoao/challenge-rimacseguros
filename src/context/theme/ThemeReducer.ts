import { ThemeDark, ThemeLight } from "./Themes"

/**
 * Tipos de Acciones
 */
type ThemeAction =
  | { type: 'theme_set_light' }
  | { type: 'theme_set_dark' }

/**
 * Interfaz que define como debería verse el estado del Tema
 */
export interface ThemeState {
  dark: boolean
  colors: {
    redRimac: string[]
    green: string[]
    grayTitle: string[]
    placeholder: string[]
    separator: string[]
    border: string[]
    background: string[]
  }
}

/**
 * Reducer que retornará un nuevo estado según la acción
 * @param state 
 * @param action 
 * @returns 
 */
export const ThemeReducer = (state: ThemeState, action: ThemeAction) => {

  switch (action.type) {
    case 'theme_set_light':
      return {
        ...ThemeLight,
      }

    case 'theme_set_dark':
      return {
        ...ThemeDark,
      }

    default:
      return state
  }

}