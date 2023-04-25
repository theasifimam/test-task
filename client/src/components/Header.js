import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <span>Onito</span>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-user">Add User</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
