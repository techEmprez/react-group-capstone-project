<<<<<<< HEAD
import React from 'react';
import Logo from '../assets/capstone.png';

const Header = () => (
  <div>
    Header
    <img className="navLogo" src={Logo} alt="NavLogo" />
=======
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import NavLink from './NavLink';
import Logo from '../assets/capstone.png';
import '../App.css';

const Header = () => (
  <div className="header">
    <img className="navLogo" src={Logo} alt="NavLogo" />
    <h1 className="pageTitle">Space Travelers' Hub</h1>
    <NavLink />
>>>>>>> develop
  </div>
);

export default Header;
