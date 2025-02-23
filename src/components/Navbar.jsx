import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Furever H🐾mes</h2>
      <ul className="nav-links">
        <li><Link to="/explore">Home</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
        <li><Link to="/applications">Applications</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar