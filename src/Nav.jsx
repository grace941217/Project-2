import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="active"><NavLink exact to="/">Home</NavLink></li>
        <li className="active"><NavLink to="/media">Media</NavLink></li>
        <li className="active"><NavLink to="/satpics">Earth</NavLink></li>
        <li className="active"><NavLink to="/mars">Mars</NavLink></li>
        <li className="active"><NavLink to="/userfavs">Favorites</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;


