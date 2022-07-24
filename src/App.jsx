import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { CreatePostPage } from './pages/CreatePostPage'
import { EditPostPage } from './pages/EditPostPage'
import { SinglePage } from './pages/SinglePage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'

import { Layout } from './components/Layout'
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

const App = (props) => {
  return (
    <AuthProvider>
      <Routes>
        <Route path = "/" element = { <Layout /> }>
          <Route index element = { <HomePage /> } />
          /* <Route path = "about/*" element = { <AboutPage /> } />
          звездочка нужна при реализации вложенного роута в другом компоненте, за пределами этого файла */
          <Route path = "about" element = { <AboutPage /> } >
            <Route path = "contacts" element = { <p>Our contacts are here</p> } />
            <Route path = "team" element = { <p>Our team is great</p> } />
          </Route>
          <Route path = "about-us" element = {
            /* С целью переадресации, можно использовать специальный элемент */
            <Navigate  to = "/about" replace /* replace чтобы не сохранять в истории этот адрес */ />
          } />
          <Route path = "blog" element = { <BlogPage /> } />
          <Route path = "blog/:id" element = { <SinglePage /> } />
          <Route path = "blog/:id/edit" element = { <EditPostPage /> } />
          <Route path = "blog/new" element = {
            <RequireAuth>
              <CreatePostPage />
            </RequireAuth>
          } />
          <Route path = "login" element = { <LoginPage /> } />
          <Route path = "*" element = { <NotFoundPage /> } />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
