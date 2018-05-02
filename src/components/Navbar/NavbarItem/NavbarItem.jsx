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
  path: "#",
  title: ""
};

NavbarItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string
};

export default NavbarItem;
