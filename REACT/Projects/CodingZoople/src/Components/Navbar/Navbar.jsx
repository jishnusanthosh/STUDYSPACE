import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">CodingZoople</h1>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;