import { useState } from 'react'

const BlogFilter = ( { query, latest, setSearchParams } ) => {

  const [search, setSearch] = useState( query )
  const [checked, setChecked] = useState( latest )

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

  return (
    <form autoComplete = "off" onSubmit = { handleSubmit }>
      <div>
        <input type = "search" name = "search"
          value = { search }
          onChange = { event => setSearch( event.target.value ) }
        />
      </div>
      <div>
        <input style = {{ padding: '0 1rem' }} type = "checkbox" name = "latest"
          checked = { checked }
          onChange = { event => setChecked( event.target.checked ) }
        /> Latest
      </div>
      <button type = "submite">Ok</button>
    </form>
  )
}

export { BlogFilter }
