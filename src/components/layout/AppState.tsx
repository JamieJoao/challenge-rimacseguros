import { ReactNode } from 'react'

import { MultipleProvider } from './MultipleProvider';
import { ThemeProvider } from 'context/theme';
import { SessionProvider } from 'context/session/SessionContext';

interface Props {
  children: ReactNode
}

export const AppState = ({ children }: Props) => {

  const providers: ReactNode[] = [
    ThemeProvider,
    SessionProvider,
  ]

  return (
    <MultipleProvider
      providers={providers}
    >
      {children}
    </MultipleProvider>
  )
}
