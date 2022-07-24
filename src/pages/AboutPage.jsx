// import { Routes, Route, Link } from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom'

const AboutPage = ( props ) => {
  return (
    <div className="container">
      <h1>AboutPage</h1>
      <Outlet />
{
/*  <Routes>
      <Route path = "contacts" element = { <p>Contacts here isContacts here isContacts here isContacts here is</p> } />
      <Route path = "team" element = { <p>Our team is great</p> } />
    </Routes>
*/
}

      <ul>
        <li><Link to = "contacts" >contacts</Link></li>
        <li><Link to = "team" >team</Link></li>
      </ul>

      <p>
        Wuia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
      </p>
      <p>
         Et suscipit suscipit recusandae consequuntur expedilestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
      </p>
      <p>
        Fndae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
      </p>
      <p>
        Tuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut um est autem sunt rem eveniet architecto
      </p>
    </div>
  )
}

export { AboutPage }
