import React from 'react'
import NavLink from './NavLink';
import Logo from '../assets/capstone.png'


 const Header = () => {
  return (
      <div className="Header">
      <img className="navLogo" src={Logo} alt="NavLogo" />
      <NavLink />
    </div>
  )
}

export default Header;
