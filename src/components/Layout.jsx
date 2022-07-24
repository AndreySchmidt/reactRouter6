import { Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

const Layout = ( props ) => {
  return (
    <>
      <header>
        <CustomLink to = "/">Home</CustomLink>
        <CustomLink to = "/blog">Blog</CustomLink>
        <CustomLink to = "/about">About</CustomLink>
      </header>

      <Outlet />

      <footer>My footer is here</footer>
    </>
  )
}

export { Layout }

// <NavLink to = "/">Home</NavLink>
