import React from 'react'

import { availableColors, availableFonts, availableWeights } from 'types';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  color?: availableColors
  size?: number
  font?: availableFonts
  weight?: availableWeights
  children?: React.ReactNode
  transform?: 'uppercase' | 'lowercase'
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
  size = 14,
  font = 'Lato',
  weight = 'normal',
  style,
  transform = 'lowercase',
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
      style={{
        color: colorsMap[color],
        fontSize: size,
        fontFamily: font,
        fontWeight: weight,
        textTransform: transform,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
