import React from "react";
import { Link } from "react-router-dom";
import './App.css'
const Navbar = () => {
  return (
    <nav className="navbar">

      <h2 className="logo">Ashok Store</h2>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;