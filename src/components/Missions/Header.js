/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import NavLink from './NavLink';
import Logo from '../../assets/capstone.png';
import '../../App.css';

const Header = () => (
  <div className="header">
    <img className="navLogo" src={Logo} alt="NavLogo" />
    <h1 className="pageTitle">Space Travelers' Hub</h1>
    <NavLink />
  </div>
);

export default Header;
