import { ReactNode } from 'react'

import { MultipleProvider } from './MultipleProvider';

interface Props {
  children: ReactNode
}

export const AppState = ({ children }: Props) => {

  const providers: ReactNode[] = []

  return (
    <MultipleProvider
      providers={providers}
    >
      {children}
    </MultipleProvider>
  )
}
