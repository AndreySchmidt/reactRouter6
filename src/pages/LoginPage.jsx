import { useLocation, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/' // если не передано откуда пришли, то вернем на главную страницу

  return (
    <div className="container">
      <h1>Login Page</h1>
      <p>{ fromPage }</p>
    </div>
  )
}

export { LoginPage }
