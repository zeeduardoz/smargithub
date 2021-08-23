import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type signInType = {
  user: string
  password: string
}

type AuthCotextType = {
  useUser: string

  signIn: (data: signInType) => Promise<any>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthCotextType)

export const AuthProvider: React.FC = ({ children }: any) => {
  const [useUser, setUser] = useState<string | any>(null)

  useEffect(() => {
    const user = localStorage.getItem('@smar/user')

    if (user) {
      setUser(user)
    }
  }, [])

  function signOut() {
    localStorage.removeItem('@smar/user')
    setUser(null)

    window.location.href = '/smargithub/'
  }

  async function signIn(data: signInType) {
    localStorage.setItem('@smar/user', data.user)

    toast.success('Autenticado com sucesso!')
    setTimeout(() => {
      window.location.href = '/smargithub/'
    }, 2000)
  }

  return (
    <AuthContext.Provider
      value={{
        useUser,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
