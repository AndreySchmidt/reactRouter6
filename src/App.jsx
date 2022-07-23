import { Routes, Rout, Link } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = (props) => {
  return (
    <>
      <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      </header>
      <div><h1>Get started with React-Router 6</h1></div>
    </>
  )
}

export default App
