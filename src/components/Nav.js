import css from '../scss/Nav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * nav, nav-item, nav-link are from bootstrap
 * activeClassName="active" is from 'react-router-dom':
 */
function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
