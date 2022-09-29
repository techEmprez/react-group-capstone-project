import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => (
  <nav>
    <ul className="navBar">
      <li className="navItem">
        <Link to="/">Rockets</Link>
      </li>
      <li className="navItem">
        <Link to="/missions">Missions</Link>
      </li>
      <li className="navLine">|</li>
      <li className="navItem">
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default NavLink;
