import React from 'react'

import { ThemeProvider } from "../../context/theme";
import { MultipleProvider } from './MultipleProvider';

interface Props {
  children: React.ReactNode
}

export const AppState = ({ children }: Props) => {

  const providers: React.ReactNode[] = [
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
