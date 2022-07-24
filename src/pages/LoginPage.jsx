import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './../hook/useAuth'

const LoginPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/' // если не передано откуда пришли, то вернем на главную страницу
  const { signIn } = useAuth()

  const handleSubmit = ( event ) => {
    event.preventDefault()
    const form = event.target
    const user = form.username.value

    if ( user ){
      signIn( user, () => { navigate( fromPage, { replace: true } ) })
    }
  }

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit = { handleSubmit }>
        <input name = "username" />
        <button type = "submit">Login</button>
      </form>
      <p>{ fromPage }</p>
    </div>
  )
}

export { LoginPage }
