import React from 'react'
import NavLink from './NavLink';


 const Header = () => {
  return (
      <div className="Header">
      <img className="navLogo" src= "./assets/capstone.png" alt="NavLogo" />
      <NavLink />
    </div>
  )
}

export default Header;
