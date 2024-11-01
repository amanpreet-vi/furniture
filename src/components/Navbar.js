import React, { useState } from "react";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faBars, faTimes } from "@fontawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>Furniture Showroom</h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {/* <FontAwesomeIcon icon={isOpen ? faTimes : faBars} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
