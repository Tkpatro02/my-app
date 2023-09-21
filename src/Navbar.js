import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className="navbar">
      <div className="logo">Openbooks.com</div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
  <li><button>Home</button></li>
  <li><button>Courses</button></li>
  <li><button>Contact</button></li>
  <li><button>Login</button></li>
</ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>&#9776;</div>
    </nav>
  );
}

export default Navbar;
