import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Openbooks.com</div>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
