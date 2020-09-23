import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav__main">
        <ul className="nav__parent">
          <li className="nav__child nav__logo">
            <Link to="/" >
              LOGO
            </Link>
          </li>
          <li className="nav__child">
            <Link className="nav__link" to="/">Home</Link>
          </li>
          <li className="nav__child">
            <Link className="nav__link" to="tasks">Tasks</Link>
          </li>
          <li className="nav__child">
            <Link className="nav__link" to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
