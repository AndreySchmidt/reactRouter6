// этот мой хук для того, чтобы не делать получение контекста на каждой странице
import { useContext } from 'react'
import { AuthContext } from './../hoc/AuthProvider'

export function useAuth(){
  return useContext( AuthContext )
}
