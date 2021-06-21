import { ReactNode } from 'react'
import cn from "classnames";

import styles from './Grid.module.sass'

interface Props {
  children?: ReactNode
  container?: boolean
  item?: boolean
  spacing?: string

  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number

  className?: string
}

export const Grid = ({
  children,
  container,
  item,
  spacing,

  xs,
  sm,
  md,
  lg,
  xl,
  xxl,

  className,

}: Props) => {

  const classNames = cn(
    className,
    {
      [styles.Grid]: container,
      [styles.Grid_item]: !!item,
    },
    item && [
      xs && styles[`Grid_item_xs_${xs}`],
      sm && styles[`Grid_item_sm_${sm}`],
      md && styles[`Grid_item_md_${md}`],
      lg && styles[`Grid_item_lg_${lg}`],
      xl && styles[`Grid_item_xl_${xl}`],
      xxl && styles[`Grid_item_xxl_${xxl}`],
    ],
  )

  return (
    <div
      className={classNames}
      style={{
        columnGap: spacing,
      }}
    >
      {children}
    </div>
  )
}
