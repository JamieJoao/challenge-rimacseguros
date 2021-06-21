import { useContext } from "react"

import { ThemeContext } from '../context/theme';

/**
 * Hook para retornar sólo las propiedades necesarias para el uso del Tema
 * @returns 
 */
export const useTheme = () => {

  const { currentTheme: { colors }, toggleTheme } = useContext(ThemeContext)

  return {
    toggleTheme,
    colors,
  }

}