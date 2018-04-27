import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavbarItem.css';

function NavbarItem({ path, title, isActive }) {
  return (
    <a
      className={`${isActive ? 'navbar-item-active' : 'navbar-item'}`}
      href={path}
    >
      {title}
    </a>
  );
}

NavbarItem.defineProp = {
  path: '',
  title: ''
};

export default NavbarItem;
