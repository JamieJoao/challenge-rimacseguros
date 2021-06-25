import { ReactNode, useContext } from "react"
import { useState } from "react"
import { createContext } from "react"
import { User } from "types/responses"

interface SessionContextProps {
  user: User
  setSession: (user: User) => void
}

export const SessionContext = createContext({} as SessionContextProps)

export const useSession = () => useContext(SessionContext)

export const SessionProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState({} as User)

  const setSession = (user: User) => {
    setUser({ ...user })
  }

  return (
    <SessionContext.Provider
      value={{
        user,
        setSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )

}