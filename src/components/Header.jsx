import React, { useState } from 'react';
import { Link} from "react-router-dom";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }


  return (
    <div className='head'>
    <nav>
    <img className='navPic' src="images/logo.png" alt="logo"  />
      <ul className={navbarOpen ? 'showing' : ''}>
        <li><a href="#home">Home</a></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#home">Menu</a></li>
        <li><Link to="/bookingpage"> Reservations</Link></li>
        <li><a href="#home">Order Online</a></li>
        <li><a href="#home">Login</a></li>
      </ul>
       <a href="#menu" className="menu-icon" onClick={toggleNavbar}>&#9776;</a>
    </nav>
    </div>
  )
};

export default Header;
