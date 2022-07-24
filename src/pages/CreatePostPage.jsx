import { useAuth } from './../hook/useAuth'
import { useNavigate } from 'react-router-dom'

const CreatePostPage = ( props ) => {

  const { signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>CreatePostPage</h1>
      <button onClick = { () => {
        signOut( () => navigate('/', { replace: true }) )
      } }>Log out</button>
    </div>
  )
}

export { CreatePostPage }
