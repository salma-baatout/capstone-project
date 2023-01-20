import React, { useState } from 'react';

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
        <li><a href="#home">About</a></li>
        <li><a href="#home">Menu</a></li>
        <li><a href="#home">Reservations</a></li>
        <li><a href="#home">Order Online</a></li>
        <li><a href="#home">Login</a></li>
      </ul>
       <a href="#menu" className="menu-icon" onClick={toggleNavbar}>&#9776;</a>
    </nav>
    </div>
  )
};

export default Header;
