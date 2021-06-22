import { useCallback, useEffect, useRef, useState } from "react"
import { availableBreakpoints, BetterObject } from '../types/index';

const BREAKPOINTS: { [key: string]: number } = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 576,
}

type breakpointType = { device: availableBreakpoints, windowSize: number }

export const useBreakpoint = () => {

  const [breakpoint, setBreakpoint] = useState({} as breakpointType)
  const lastPointRef = useRef({} as breakpointType)
  const devices: availableBreakpoints[] = (BetterObject || Object).keys(BREAKPOINTS)

  const handleResize = useCallback(
    () => {
      lastPointRef.current.windowSize = window.innerWidth

      for (let i = 0; i < devices.length; i++) {
        const device = devices[i]
        const size = BREAKPOINTS[device]
        const comparisson = i === devices.length - 1
          ? lastPointRef.current.windowSize <= size
          : lastPointRef.current.windowSize >= size

        if (comparisson) {
          if (lastPointRef.current.device !== device) {
            lastPointRef.current.device = device

            setBreakpoint({ ...lastPointRef.current })
          }

          break
        }
      }
    },
    [devices]
  )

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return {
    ...breakpoint
  }
}