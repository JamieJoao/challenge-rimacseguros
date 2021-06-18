import { useMedia } from "react-use"

import { breakpoints } from "constants/index";

/**
 * Hook para detectar si la pantalla tiene tamaño móbil o de escritorio
 * @returns 
 */
export const useMediaQuery = () => {

  const isMobile = useMedia(`(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})`)

  return {
    isMobile,
  }

}