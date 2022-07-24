import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { CreatePostPage } from './pages/CreatePostPage'
import { EditPostPage } from './pages/EditPostPage'
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
          <Route path = "about-us" element = {
            /* С целью переадресации, можно использовать специальный элемент */
            <Navigate  to = "/about" replace /* replace чтобы не сохранять в истории этот адрес */ />
          } />
          <Route path = "blog" element = { <BlogPage /> } />
          <Route path = "blog/:id" element = { <SinglePage /> } />
          <Route path = "blog/:id/edit" element = { <EditPostPage /> } />
          <Route path = "blog/new" element = { <CreatePostPage /> } />
          <Route path = "*" element = { <NotFoundPage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
