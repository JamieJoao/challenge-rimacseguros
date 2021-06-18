import React from 'react'
import './styles.scss'

interface Props {
  children?: React.ReactNode
}

export const Container = ({ children }: Props) => {
return (
    <div className='r-container'>
      {children}
    </div>
  )
}
