import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';
import HamburgerBtn from './HamburgerBtn.js';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={style.main}>
       <img
  src="https://storecode.in/images/logo-nav.png"
  style={{ height: '50px', width: 'auto'}} // Adjust the height value as needed
  alt="Description"
/>
<h1>StoreCode</h1>

          <div className={style.HamburgerBtn}>
        <HamburgerBtn/>
        </div>
      <ul
           
      >
    
      
        <p>
          <NavLink
            exact
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              backgroundColor: ' ' ,
              
            }}
            onClick={() => handleNavLinkClick('home')}
          >
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            exact
            to="/Store"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: activeLink === 'store' ? 'orange' : '',
            }}
            onClick={() => handleNavLinkClick('store')}
          >
            Store
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Login"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: activeLink === 'login' ? 'orange' : '',
            }}
            onClick={() => handleNavLinkClick('login')}
          >
            Login
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Register"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: activeLink === 'login' ? 'orange' : '',
            }}
            onClick={() => handleNavLinkClick('login')}
          >
            Register
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Contact"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: activeLink === 'login' ? 'orange' : '',
            }}
            onClick={() => handleNavLinkClick('login')}
          >
            Contact
          </NavLink>
        </p>
      
        <p>
          <NavLink
            to="/About"
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: activeLink === 'blog' ? 'orange' : '',
            }}
            onClick={() => handleNavLinkClick('blog')}
          >
            About
          </NavLink>
        </p>
      </ul>
    </div>




  );
}