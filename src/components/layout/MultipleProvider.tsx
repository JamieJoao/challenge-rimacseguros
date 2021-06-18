import React from 'react'

interface Props {
  children: React.ReactNode
  providers: React.ReactNode[]
}

/**
 * Componente que me permite envolver múltiples providers
 * y evitar el anidamiento 
 * @param param0 
 * @returns 
 */
export const MultipleProvider = ({ children, providers }: Props) => {

  const getProviders = () => {
    return providers
      .reduce(
        (acc, provider: any) => (
          React.createElement(provider, null, acc)
        ),
        children
      )
  }

  return (
    <>
      {getProviders()}
    </>
  )
}
