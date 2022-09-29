import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
   <nav>
    <ul>
       <li>
        <Link href="#rockets" style={activeLink} to="/" >Rockets</Link>
        </li>
       <li>
       <Link to="/missions" >Missions</Link>
       </li>
       <li>|</li>
       <li>
       <Link to="/profile" >My Profile</Link>
       </li> 
    </ul>
   </nav>
  )
}
<Nav.Link href="#rockets">
              <NavLink style={activeLink} className="text-primary link" to="/">Rockets</NavLink>
            </Nav.Link>

export default NavLink
