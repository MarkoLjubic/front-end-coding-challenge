import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

import "./NavbarItem.css";

function NavbarItem({ path, title }) {
  return (
    <NavLink
      className={`navbar-item`}
      to={path}
    >
      {title}
    </NavLink>
  );
}

NavbarItem.defineProp = {
  path: "",
  title: ""
};

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavbarItem;
