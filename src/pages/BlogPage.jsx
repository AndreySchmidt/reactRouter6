import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const BlogPage = ( props ) => {

  // console.log(useLocation())

  const [postList, setPostList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  //?post=sometext&d=4&a=7....
  const query = searchParams.get('post') || ''

  //добавим обработку чекбокса latest
  const latest = searchParams.has('latest')
  const startsFrom = ( latest )? 80 : 1

  const handleSubmit = ( event ) => {

    event.preventDefault()
    const form = event.target
    const formQuery = form.search.value
    const isLatest = form.latest.checked

    const params = {}
    if ( formQuery.length ){
      params.post = formQuery
    }
    if ( isLatest ){
      params.latest = true
    }

    setSearchParams( params )
  }

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
      <form autoComplete = "off" onSubmit = { handleSubmit }>
        <div>
          <input type = "search" name = "search" />
        </div>
        <div>
          <input style = {{ padding: '0 1rem' }} type = "checkbox" name = "latest" /> Latest
        </div>
        <button type = "submite">Ok</button>
      </form>

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
