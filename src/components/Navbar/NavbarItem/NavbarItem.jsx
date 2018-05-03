import React from "react";
import PropTypes from "prop-types";

import "./NavbarItem.css";

function NavbarItem({ path, title, isActive }) {
  return (
    <a
      className={`navbar-item ${isActive && "navbar-item-active"}`}
      href={path}
    >
      {title}
    </a>
  );
}

NavbarItem.defineProp = {
  isActive: false,
  path: "",
  title: ""
};

NavbarItem.propTypes = {
  isActive: PropTypes.bool,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default NavbarItem;
