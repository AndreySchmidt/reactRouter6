// const goBack = () => navigate('/') можно писать ссылку строкой
//(to, {replace: true false, state: ...} replace? не записывать переход в историю, state? передать стайт),
//можно назад-вперед числом со знаком

import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const SinglePage = ( props ) => {

  const { id } = useParams()
  const navigate = useNavigate()
  const [postItem, setPostItem] = useState( null )

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', { replace: true })

  useEffect( () => {
    fetch( `https://jsonplaceholder.typicode.com/posts/${id}` )
      .then( res => res.json() )
      .then( data => setPostItem( data ) )
  }, [id] )

  return (
    <div className="container">

      <h1>Single Item</h1>
      <button onClick = { goBack }>Go back</button>
      <button onClick = { goHome }>Go home page {/* Считается плохой практикой, пиши ссылку Link, если нужна ссылка */}</button>

      { postItem && (
          <>
            <h2>{ postItem.title }</h2>
            <p>{ postItem.body }</p>
            <Link to = {`/blog/${ postItem.id }/edit`}>Edit this post</Link>
          </>
      ) }
    </div>
  )
}

export { SinglePage }
