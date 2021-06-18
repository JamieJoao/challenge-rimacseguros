import { useReducer, createContext } from "react";

import { ThemeReducer, ThemeState } from './ThemeReducer';
import { ThemeLight } from "./Themes";

/**
 * Interfaz que define como debería verse el contexto del Tema
 */
interface ThemeContextProps {
  currentTheme: ThemeState
  toggleTheme: () => void
}

/**
 * Contexto para el Tema
 */
export const ThemeContext = createContext({} as ThemeContextProps)

/**
 * Proveedor que envolverá toda la aplicación
 * @param param0 
 * @returns 
 */
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [currentTheme, dispatch] = useReducer(ThemeReducer, ThemeLight)

  const toggleTheme = () => {
    dispatch({
      type: currentTheme.dark ? 'theme_set_light' : 'theme_set_dark'
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )

}