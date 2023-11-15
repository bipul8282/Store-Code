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
  src="https://i.pinimg.com/736x/87/a1/12/87a1122a61a8cdde29f44a12c3a9992f.jpg"
  style={{ height: '50px', width: 'auto' }} // Adjust the height value as needed
  alt="Description"
/>
<p>StoreCode</p>

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
              backgroundColor: activeLink === 'home' ? 'orange' : '',
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
              color: 'black',
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
              color: 'black',
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
              color: 'black',
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
              color: 'black',
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
              color: 'black',
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
