import { Link, useMatch } from 'react-router-dom'


const CustomLink = ( { children, to, ...props } ) => {

  const match = useMatch({
    path: to,
    end: to.length === 1, // если главная страница, берем полный путь, если нет - то неполный
  })
  // const match = useMatch(to)

  return (
    <Link
      to = { to }
      style = {{
        color: match ? 'var(--color-active)' : 'white',
      }}
      { ...props }
    >
      { children }
    </Link>
  )
}

export { CustomLink }
