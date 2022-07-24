import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from './../hook/useAuth'

// в роли children будут страницы
const RequireAuth = ( { children } ) => {

  const location = useLocation()
  const user = useAuth()

  if( !user ){
    return <Navigate to = '/login' state = { { from: location } } />
  }

  return (
    <div></div>
  )

}

export { RequireAuth }
