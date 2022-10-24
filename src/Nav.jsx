import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/media">Media</NavLink>
      <NavLink to="/satpics">Earth From Satellite</NavLink>
      <NavLink to="/mars">Mars</NavLink>
      <NavLink to="/userfavs">Favorites</NavLink>
    </nav>
  );
}

export default Nav;
