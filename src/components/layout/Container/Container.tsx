import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './Container.module.sass'

interface Props {
  children: ReactNode
  fluid?: boolean
  disableGutters?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export const Container = ({
  children,
  fluid,
  disableGutters,
  maxWidth = 'xl'

}: Props) => {

  const classNames = cn(
    {
      [styles.Container_disable_gutters]: disableGutters,
    },
    [
      styles.Container,
      !fluid && styles[`Container_${maxWidth}`]
    ]
  )

  return (
    <div
      className={classNames}
    >
      {children}
    </div>
  )
}
