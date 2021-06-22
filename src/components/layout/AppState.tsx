import { ReactNode } from 'react'

import { MultipleProvider } from './MultipleProvider';
import { ThemeProvider } from 'context/theme';

interface Props {
  children: ReactNode
}

export const AppState = ({ children }: Props) => {

  const providers: ReactNode[] = [
    ThemeProvider,
  ]

  return (
    <MultipleProvider
      providers={providers}
    >
      {children}
    </MultipleProvider>
  )
}
