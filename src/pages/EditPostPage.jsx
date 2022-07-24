import { useParams } from 'react-router-dom'

const EditPostPage = ( props ) => {

  const { id } = useParams()

  return (
    <div className="container">
      <h1>EditPostPage { id }</h1>
    </div>
  )
}

export { EditPostPage }
