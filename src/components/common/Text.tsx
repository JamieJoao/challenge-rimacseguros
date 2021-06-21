import React from 'react'

import { availableColors, availableFonts, availableWeights } from 'types/index';
import { useTheme } from '../../hooks/__useTheme';

interface Props {
  color?: availableColors
  className?: string
  size?: number
  font?: availableFonts
  weight?: availableWeights
  children?: React.ReactNode
  transform?: 'uppercase' | 'lowercase' | 'none'
  block?: boolean
  style?: React.CSSProperties
}

type ColorsMap = { [key in availableColors]: string }

/**
 * Componente Text para textos personalizados
 * @param param0 
 * @returns 
 */
export const Text = ({
  color = 'gray-bold',
  className,
  size = 14,
  font = 'Lato',
  weight = 'normal',
  style,
  transform = 'none',
  block,
  children
}: Props) => {

  const { colors: { grayTitle, placeholder, redRimac, purple } } = useTheme()

  const colorsMap: ColorsMap = {
    'gray-bold': grayTitle[0],
    'gray-soft': placeholder[1],
    placeholder: placeholder[0],
    red: redRimac[0],
    purple: purple[0],
  }

  return (
    <span
      className={className}
      style={{
        color: colorsMap[color],
        fontSize: size,
        fontFamily: font,
        fontWeight: weight,
        textTransform: transform,
        display: block ? 'block' : 'inline',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
