import { useState, createContext } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ( { children } ) => {
  const [user, setUser] = useState(null)
  const signIn = ( newUser, callbackFn ) => {
    setUser( newUser )
    callbackFn()
  }
  const signOut = ( callbackFn ) => {
    setUser(null)
    callbackFn()
  }
  const valueToProvide = { user, signIn, signOut }

  return (
    <AuthContext.Provider value = { valueToProvide }>
      { children }
    </AuthContext.Provider>
  )
}
