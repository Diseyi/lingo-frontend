import React, { useState, createContext } from "react"

export const AuthContext = createContext({})

type Props = {
  token: any
}

const AuthProvider = ({children}: any) => {

  const [token, setToken] = useState("") 

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;