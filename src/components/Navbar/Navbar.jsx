import React from "react";

import NavbarItem from "./NavbarItem/NavbarItem.jsx";
import { linkShema } from "../../utils/config";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2 className="navbar-header">Offices</h2>
      <div className="navbar-menu">
        {Object.values(linkShema).map(item => (
          <NavbarItem key={item.title} path={item.path} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
