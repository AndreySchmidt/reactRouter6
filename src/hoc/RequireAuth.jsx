import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './../hook/useAuth'

// в роли children будут страницы
const RequireAuth = ( { children } ) => {

  const location = useLocation()
  const { user } = useAuth()

  // console.log(user)

  if( !user ){
    return <Navigate to = '/login' state = { { from: location } } />
  }

  // console.log(user)
  return children
}

export { RequireAuth }
