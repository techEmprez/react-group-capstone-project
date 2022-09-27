import React from 'react'
import NavLink from './NavLink';
import Logo from '../assets/capstone';

 const Header = () => {
  return (
      <div>Header
      <img className='navLogo' src= {Logo} alt="NavLogo" />
    </div>
  )
}

export default Header;
