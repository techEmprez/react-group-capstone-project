import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
   <nav>
    <ul>
       <li>
        <Link to="/" >Rockets</Link>
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

export default NavLink