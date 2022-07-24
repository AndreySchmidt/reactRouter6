import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const SinglePage = ( props ) => {

  const { id } = useParams()
  const [postItem, setPostItem] = useState( null )

  useEffect( () => {
    fetch( `https://jsonplaceholder.typicode.com/posts/${id}` )
      .then( res => res.json() )
      .then( data => setPostItem( data ) )
  }, [id] )


  return (
    <div className="container">
      <h1>Single Item</h1>
      { postItem && (
          <>
            <h2>{ postItem.title }</h2>
            <p>{ postItem.body }</p>
          </>
      ) }
    </div>
  )
}

export { SinglePage }
