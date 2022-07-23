import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { SinglePage } from './pages/SinglePage'
import { NotFoundPage } from './pages/NotFoundPage'

import { Layout } from './components/Layout'

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path = "/" element = { <Layout /> }>
          <Route index element = { <HomePage /> } />
          <Route path = "about" element = { <AboutPage /> } />
          <Route path = "blog" element = { <BlogPage /> } />
          <Route path = "blog/:id" element = { <SinglePage /> } />
          <Route path = "*" element = { <NotFoundPage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
