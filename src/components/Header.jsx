import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useEffect } from 'react';


const Header = () => {

  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", event => {
        if (event.target.tagName !== 'a') {
          return;
        }
        event.preventDefault();
        const id = event.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);


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

        <li><a href="#about">About</a></li>

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
