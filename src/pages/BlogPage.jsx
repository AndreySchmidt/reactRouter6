import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { BlogFilter } from './../components/BlogFilter'

const BlogPage = ( props ) => {

  // console.log(useLocation())

  const [postList, setPostList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  //?post=sometext&d=4&a=7....
  const query = searchParams.get('post') || ''

  //добавим обработку чекбокса latest
  const latest = searchParams.has('latest')
  const startsFrom = ( latest )? 80 : 1

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
      <BlogFilter setSearchParams = { setSearchParams } query = { query } latest = { latest } />

      {
        postList
          .filter( postItem => postItem.title.includes( query ) && postItem.id >= startsFrom )
          .map( ( postItem ) => {
            return ( <div key = { postItem.id }>
              <Link key = { postItem.id } to = {`/blog/${ postItem.id }`} >{ postItem.title }</Link>
            </div> )
          } )
      }
    </div>
  )
}

export { BlogPage }
