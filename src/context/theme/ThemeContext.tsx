import { useState, ReactNode, createContext } from "react";

type ThemeType = 'light' | 'dark'

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
  switchTheme: (theme: ThemeType) => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<ThemeType>('light')

  const toggleTheme = () => {
    setTheme(
      theme === 'light' ? 'dark' : 'light'
    )
  }

  const switchTheme = (inputTheme: ThemeType) => {
    setTheme(inputTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        switchTheme,
      }}
    >
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )

}