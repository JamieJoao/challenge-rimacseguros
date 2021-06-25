import { axiosDB } from "api/axiosDB"
import { useSession } from "context/session/SessionContext"
import { useState } from "react"
import { User } from "types/responses"

export const useFetch = () => {

  const [loading, setLoading] = useState(false)
  const { setSession } = useSession()

  const getUser = async ({ phone, nrodoc, plate }: { phone: string, nrodoc: string, plate: string }) => {
    try {

      setLoading(true)
      const response = await axiosDB.get<User[]>(`users?phone=${phone}`)
      setLoading(false)

      if (response.status === 200) {
        const users = response.data
        if (users.length) {
          const user = users[0]
          user.nrodoc = nrodoc
          user.plate = plate

          setSession(user)
        }
      }

    } catch (error) {

    }
  }

  return {
    getUser,

    loading,
  }

}