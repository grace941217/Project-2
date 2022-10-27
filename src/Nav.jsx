import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="active"><NavLink to="/">Home</NavLink></li>
        <li className="active"><NavLink to="/gallery">Gallery</NavLink></li>
        <li className="active"><NavLink to="/earth">Earth From Satellite</NavLink></li>
        <li className="active"><NavLink to="/mars">Mars</NavLink></li>
        <li className="active"><NavLink to="/favorites">Favorites</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;


