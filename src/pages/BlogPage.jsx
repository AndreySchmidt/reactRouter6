import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BlogPage = ( props ) => {

  // console.log(useLocation())

  const [postList, setPostList] = useState([])

  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/posts' )
      .then( res => res.json() )
      .then( data => setPostList( data ) )
  }, [] )

// console.log(postList)

  return (
    <div className="container">
      <Link to = "/blog/new">Add new post</Link>
      <h1>Our news</h1>
      {
        postList.map( ( postItem ) => {
          return ( <div key = { postItem.id }>
            <Link key = { postItem.id } to = {`/blog/${ postItem.id }`} >{ postItem.title }</Link>
          </div> )
        } )
      }
    </div>
  )
}

export { BlogPage }
